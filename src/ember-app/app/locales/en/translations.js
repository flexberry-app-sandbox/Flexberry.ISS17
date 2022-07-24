import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISISS17ВидПоддержкиLForm from './forms/i-i-s-i-s-s17-вид-поддержки-l';
import IISISS17УсловиеLForm from './forms/i-i-s-i-s-s17-условие-l';
import IISISS17ВидПоддержкиEForm from './forms/i-i-s-i-s-s17-вид-поддержки-e';
import IISISS17УсловиеEForm from './forms/i-i-s-i-s-s17-условие-e';
import IISISS17ВидПоддержкиModel from './models/i-i-s-i-s-s17-вид-поддержки';
import IISISS17УсловиеModel from './models/i-i-s-i-s-s17-условие';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-i-s-s17-вид-поддержки': IISISS17ВидПоддержкиModel,
    'i-i-s-i-s-s17-условие': IISISS17УсловиеModel
  },

  'application-name': 'I s s17',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'I s s17',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'I s s17',
          title: 'I s s17'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'i-s-s17': {
          caption: 'ISS17',
          title: 'ISS17',
          'i-i-s-i-s-s17-вид-поддержки-l': {
            caption: 'ВидПоддержкиL',
            title: 'Вид поддержки'
          },
          'i-i-s-i-s-s17-условие-l': {
            caption: 'УсловиеL',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-i-s-s17-вид-поддержки-l': IISISS17ВидПоддержкиLForm,
    'i-i-s-i-s-s17-условие-l': IISISS17УсловиеLForm,
    'i-i-s-i-s-s17-вид-поддержки-e': IISISS17ВидПоддержкиEForm,
    'i-i-s-i-s-s17-условие-e': IISISS17УсловиеEForm
  },

});

export default translations;
