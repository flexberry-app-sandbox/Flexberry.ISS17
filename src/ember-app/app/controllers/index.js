import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.i-s-s17.caption'),
          title: i18n.t('forms.application.sitemap.i-s-s17.title'),
          children: [{
            link: 'i-i-s-i-s-s17-вид-поддержки-l',
            caption: i18n.t('forms.application.sitemap.i-s-s17.i-i-s-i-s-s17-вид-поддержки-l.caption'),
            title: i18n.t('forms.application.sitemap.i-s-s17.i-i-s-i-s-s17-вид-поддержки-l.title'),
            icon: 'tags',
            children: null
          }, {
            link: 'i-i-s-i-s-s17-вид-поддержки-l',
            caption: i18n.t('forms.application.sitemap.i-s-s17.i-i-s-i-s-s17-вид-поддержки-l.caption'),
            title: i18n.t('forms.application.sitemap.i-s-s17.i-i-s-i-s-s17-вид-поддержки-l.title'),
            icon: 'tasks',
            children: null
          }, {
            link: 'i-i-s-i-s-s17-условие-l',
            caption: i18n.t('forms.application.sitemap.i-s-s17.i-i-s-i-s-s17-условие-l.caption'),
            title: i18n.t('forms.application.sitemap.i-s-s17.i-i-s-i-s-s17-условие-l.title'),
            icon: 'table',
            children: null
          }]
        }
      ]
    };
  }),
})