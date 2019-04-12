import EventEmitter from './events';
import defaultOptions from './defaultOptions';


let fetchStyle = function(url) {
  return new Promise((resolve, reject) => {
    let link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.onload = function() { resolve(); };
    link.href = url;

    if (!document.querySelector('link[href="' + url + '"]')) {
      let headScript = document.querySelector('head');
      headScript.append(link);
    }
  });
};

export default class bulmaIconpicker extends EventEmitter {
  constructor(selector, options = {}) {
    super();

    this.element = typeof selector === 'string'
      ? document.querySelector(selector)
      : selector;
    // An invalid selector or non-DOM node has been provided.
    if (!this.element) {
      throw new Error('An invalid selector or non-DOM node has been provided.');
    }

    this._clickEvents = ['click'];
    /// Set default options and merge with instance defined
    this.options = {
      ...defaultOptions,
      ...options
    };

    this.icons = [];
    this.id = 'iconPicker' + ( new Date ).getTime();
    this.init();
  }

  /**
   * Initiate all DOM element containing carousel class
   * @method
   * @return {Array} Array of all Carousel instances
   */
  static attach(selector = '[data-action="iconPicker"]', options = {}) {
    let instances = new Array();

    const elements = document.querySelectorAll(selector);
    [].forEach.call(elements, element => {
      setTimeout(() => {
        instances.push(new bulmaIconpicker(element, options));
      }, 100);
    });
    return instances;
  }

  init() {
    this.createModal();
    this.createPreview();

    this.options.iconSets.forEach( iconSet => {
      fetchStyle(iconSet.css);
      // Parse CSS file to get array of all available icons
      fetch(iconSet.css, {mode: 'cors'})
        .then(res => {
          return res.text();
        })
        .then(css => {
          this.icons[iconSet.name] = this.parseCSS(css, iconSet.prefix || 'fa-', iconSet.displayPrefix || '');
          this.modalSetTabs.querySelector('a').click();
          var touchEvent = new Event('touchstart');
          this.modalSetTabs.querySelector('a').dispatchEvent(touchEvent);
        })
        ;
    } );
  }

  createPreview() {
    this.preview = document.createElement('div');
    this.preview.className = 'icon is-large';
    this.preview.classList.add('iconpicker-preview');
    let iconPreview = document.createElement('i');
    iconPreview.className = 'iconpicker-icon-preview';
    if (this.element.value.length) {
      let classes = this.element.value.split(' ');
      classes.forEach( cls => {
        iconPreview.classList.add( cls );
      });
    }
    this.preview.appendChild(iconPreview);

    this._clickEvents.forEach(event => {
      this.preview.addEventListener(event, e => {
        e.preventDefault();

        this.modal.classList.add('is-active');
      });
    });

    this.element.parentNode.insertBefore(this.preview, this.element.nextSibling);
  }

  parseCSS( css, prefix = 'fa-', displayPrefix = '' ) {
    const iconPattern = new RegExp('\\.' + prefix + '([^\\.!:]*)::?before\\s*{\\s*content:\\s*["|\']\\\\[^\'|"]*["|\'];?\\s*}', 'g');
    const index = 1;
    let icons = [], icon, match;

    while ( match = iconPattern.exec(css)) {
      icon = {
        prefix: prefix,
        selector: prefix + match[index].trim(':'),
        name: this.ucwords(match[index]).trim(':'),
        filter: match[index].trim(':'),
        displayPrefix: displayPrefix
      }
      icons[match[index]] = icon;
    }

    if (Object.getOwnPropertyNames(this.icons).length == 0) {
      console.warn( "No icons found in CSS file" );
    }
    return icons;
  }

  ucwords (str) {
    return (str + '').replace(/^(.)|\s+(.)/g, function ($1) {
      return $1.toUpperCase();
    });
  }

  drawIcons(iconSet) {
    this.iconsList.innerHTML = '';

    if (iconSet) {
      for (let [iconName, icon] of Object.entries(iconSet)) {
        this.iconsList.appendChild(this.createIconPreview(icon));
      }
    }
  }

  createIconPreview(icon, prefix = 'fa-') {
    let iconLink = document.createElement('a');
    iconLink.dataset.title = icon['name'];
    iconLink.setAttribute('title', icon['name']);
    iconLink.dataset.icon = icon['selector'];
    iconLink.dataset.filter = icon['filter'];
    let iconPreview = document.createElement('i');
    iconPreview.className = 'iconpicker-icon-preview';
    if (icon['displayPrefix'].length) {
      prefix = icon['displayPrefix'].split(' ');
      prefix.forEach( pfx => {
        iconPreview.classList.add( pfx );
      });
    }
    iconPreview.classList.add( icon['selector'] );
    iconLink.appendChild(iconPreview);
    this._clickEvents.forEach(event => {
      iconLink.addEventListener(event, e => {
        e.preventDefault();
        this.preview.innerHTML = '';
        this.element.value = e.target.classList;
        this.element.dispatchEvent(new Event('change'));
        this.preview.appendChild(e.target.cloneNode(true));
        this.modal.classList.remove('is-active');
      });
    });
    return iconLink;
  }

  createModal() {
    this.modal = document.createElement('div');
    this.modal.className = 'modal';
    this.modal.classList.add( 'iconpicker-modal' );
    this.modal.id = this.id;
    let modalBackground = document.createElement('div');
    modalBackground.className = 'modal-background';
    let modalCard = document.createElement('div');
    modalCard.className = 'modal-card';

    let modalHeader = document.createElement('header');
    modalHeader.className = 'modal-card-head';
    let modalHeaderTitle = document.createElement('p');
    modalHeaderTitle.className = 'modal-card-title';
    modalHeaderTitle.innerHTML = 'iconPicker';
    this.modalHeaderSearch = document.createElement('input');
    this.modalHeaderSearch.setAttribute('type', 'search');
    this.modalHeaderSearch.setAttribute('placeholder', 'Search');
    this.modalHeaderSearch.className = 'iconpicker-search';
    this.modalHeaderSearch.addEventListener('input', e => {
      this.filter(e.target.value);
    });
    let modalHeaderClose = document.createElement('button');
    modalHeaderClose.className = 'delete';
    this._clickEvents.forEach(event => {
      modalHeaderClose.addEventListener(event, e => {
        e.preventDefault();

        this.modal.classList.remove('is-active');
      });
    });

    modalCard.appendChild(modalHeader);

    this.modalBody = document.createElement('section');
    this.modalBody.className = 'modal-card-body';

    if (this.options.iconSets.length >= 1) {
      let modalSets = document.createElement('div');
      modalSets.className = 'iconpicker-sets';
      modalSets.classList.add('tabs');
      this.modalSetTabs = document.createElement('ul');
      this.options.iconSets.forEach(iconSet => {
        let modalSetTab = document.createElement('li');
        let modalSetTabLink = document.createElement('a');
        modalSetTabLink.dataset.iconset = iconSet.name;
        modalSetTabLink.innerHTML = iconSet.name;
        this._clickEvents.forEach(event => {
          modalSetTabLink.addEventListener(event, e => {
            e.preventDefault();

            var activeModalTabs = this.modalSetTabs.querySelectorAll('.is-active');
            [].forEach.call(activeModalTabs, function(activeModalTab) {
              activeModalTab.classList.remove('is-active');
            });

            e.target.parentNode.classList.add('is-active');
            this.drawIcons(this.icons[e.target.dataset.iconset]);
            this.filter(this.modalHeaderSearch.value);
          });
        });
        modalSetTab.appendChild(modalSetTabLink);
        this.modalSetTabs.appendChild(modalSetTab);
      });
      modalSets.appendChild(this.modalSetTabs);
      modalCard.appendChild(modalSets);
    }

    this.iconsList = document.createElement('div');
    this.iconsList.className = 'iconpicker-icons';

    modalHeader.appendChild(modalHeaderTitle);
    modalHeader.appendChild(this.modalHeaderSearch);
    modalHeader.appendChild(modalHeaderClose);

    this.modalBody.appendChild(this.iconsList);
    modalCard.appendChild(this.modalBody);

    this.modal.appendChild(modalBackground);
    this.modal.appendChild(modalCard);
    document.body.appendChild(this.modal);
  }

  filter(value = '') {
    if (value === '') {
      this.iconsList.querySelectorAll('[data-filter]').forEach( el => {
        el.classList.remove('is-hidden');
      });
      return;
    }
    this.iconsList.querySelectorAll('[data-filter]').forEach( el => {
      el.classList.remove('is-hidden');
    });
    this.iconsList.querySelectorAll('[data-filter]:not([data-filter*="' + value + '"])').forEach( el => {
      el.classList.add('is-hidden');
    });
  }
}
