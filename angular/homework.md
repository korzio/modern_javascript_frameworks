# Homework

Progressive Dictionary

### Concepts

#### Keywords

**My Dictionary** / **Progressive Dictionary** the list of all words ever added by me to an application

#### Description

As a user I want to

- Upload or send a link to text/audio/video that I want to read - learn words first, then I can watch/read/listen material
- Learn words (also possible with a limit of time). Show hints/context, in which word was found. If user cannot remember a word - show him the context, offer other translations and examples. Images from google? Another option would be to recognise the user's voice and compare the result with a given word.
- Lessons statistics - green period/total words/...
- My text is transforming into the dictionary
- Select pages from uploaded texts to use in future lessons
- Manage my dictionary and (upcoming and generally) lessons
- My dictionary is saved, and it contains the full information - which words I know, which I don't
- New lesson is automatically structured from given text and randomly added words from my dictionary (some words I want to repeat). Also transformation should include sentences as well.
- Outputs the lesson in .csv format
- User can set up his level - middle/beginner.
- Loads recently used words from google [translate](https://developers.google.com/apps-script/guides/rest/quickstart/nodejs#notes)

## Human Description in Russian

Приложение для запоминания иностранных слов. В этом приложении пользователь сможет добавлять слова для изучения, проходить тесты для запоминания слов. Это Single Page Application состоит из 3 страниц:
Последние добавленные слова (Recently Added)
Упражнениями (Go)
Настройки (Settings)
На главном экране, на странице Recently Added пользователь видит список последних добавленных слов, может добавить новое слово в словарь (если успеем, будем делать также статистику изучения слов).

На странице упражнений пользователь занимается тестированием своих знаний. Ему показывается слово на одном языке, и он должен написать его перевод на другой язык. Если перевод правильный, слово засчитывается, иначе показываем ошибку. Мы начнем с двух языков - русского и английского, будем расширять возможности приложения по мере написания программы.

На странице настроек пользователь выбирает языки, количество слов в упражнении, отводимое на упражнение время.

Навигация по страницам происходит с помощью ссылок в верхней части страниц, каждой странице соответствует отдельный url.

### Задание по сервисам

Создать сервисы для работы с данными. Сервисы должны запрашивать данные из API и отрисовываться в приложении.

### Minimal Web Interface

- Login Page (with google only)
- Upload a text (can be a link or a file upload input) -> Select pages to add -> Transform into new lesson -> Output as .csv
- Manage lessons
- Manage My Dictionary

### Needed resources

- [TO DECIDE] Multi language dictionary to look for words and phrases. Or to use google translate

Yandex translate is free
https://tech.yandex.ru/dictionary/doc/dg/reference/lookup-docpage/

#### Google Translate Resources

- (perl implementation)[https://github.com/jamhed/anki/blob/master/lib/Google.pm]
```
my $r = $self->_get('https://translate.google.com');
$r->content =~ /USAGE\='(.+?)'/gmsi;
$self->_post('https://translate.google.com/translate_a/sg?client=t&cm=g&hl=en&xt=' . $self->{google_key})->content;
```

### Chrome Extension

- Allows me to add unknown words to my dictionary
- Asks me sometime for the exercise ("Please translate few words now/It is time for training")

### TODO

- Add components tests
- UI refactoring - make a general [material-ui application](http://www.material-ui.com/)
- Refactoring - organize folders by feature, DDD
- Use common [selectors](https://gist.github.com/mattiamanzati/ff21009da5f705ebb4cd#file-selectors-js) instead of inline functions

### Additional and future work

- Progressive Web App Concept, [PWAify](https://github.com/vladikoff/PWAify)
- Statistical text researches, browse relevant articles and texts.
- Integration with Feedly, books, ...

### Resources

- https://egghead.io/series/getting-started-with-redux
- http://www.material-ui.com/
- [Materialize](http://materializecss.com)
- http://redux.js.org/docs/basics/ExampleTodoList.html
- https://console.developers.google.com/apis/credentials/oauthclient/21997312381-0jk8tvau79lnq0n68nqdehf3l5dsrpe6.apps.googleusercontent.com?project=lilyann-1326
- https://firebase.google.com/docs/database/server/structure-data#how_data_is_structured_its_a_json_tree
- [language codes](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)


#### Text Recognition

- http://www.iro.umontreal.ca/~felipe/TALN2010/Xml/Papers/all/taln2010_submission_172.pdf
- https://tech.yandex.ru/translate/doc/dg/reference/translate-docpage/

#### Related Projects

- [Quizlet](https://quizlet.com/)
- https://chrome.google.com/webstore/detail/lingualeo-english-transla/nglbhlefjhcjockellmeclkcijildjhi?hl=ru


# Links

- [Implementation](https://bitbucket.org/korzio/lillyann)
- [Google Docs Description](https://docs.google.com/document/d/1gmaIuIA0FHo5bscprZc20amDkOVU2kkdnUehWKaJAvc/edit#)