import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'I s s17',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'I s s17',
          title: 'I s s17'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-i-s-s17-вид-поддержки-l': IISISS17ВидПоддержкиLForm,
    'i-i-s-i-s-s17-условие-l': IISISS17УсловиеLForm,
    'i-i-s-i-s-s17-вид-поддержки-e': IISISS17ВидПоддержкиEForm,
    'i-i-s-i-s-s17-условие-e': IISISS17УсловиеEForm
  },

});

export default translations;
