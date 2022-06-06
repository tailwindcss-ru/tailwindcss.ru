import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayoutEffect'
import clsx from 'clsx'
import { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'

let testimonials = [
  // Column 1
  [
    {
      content: 'Я чувствую себя идиотом из-за того, что до сих пор не использовал Tailwind CSS.',
      url: 'https://twitter.com/ryanflorence/status/1187951799442886656',
      author: {
        name: 'Ryan Florence',
        role: 'Remix & React Training',
        avatar: require('@/img/avatars/ryan-florence.jpg').default,
      },
    },
    {
      content:
        'Если бы мне пришлось порекомендовать способ начать программирование сегодня, это был бы HTML + CSS с Tailwind CSS.',
      url: 'https://twitter.com/rauchg/status/1225611926320738304',
      author: {
        name: 'Guillermo Rauch',
        role: 'Vercel',
        avatar: require('@/img/avatars/guillermo-rauch.jpg').default,
      },
    },
    {
      content: `У меня нет навыков дизайна, а с Tailwind я могу с легкостью создавать красивые веб-сайты, и это все, что я когда-либо хотел, в рамках CSS.`,
      author: {
        name: 'Sara Vieira',
        role: 'CodeSandbox',
        avatar: require('@/img/avatars/sara-vieira.jpg').default,
      },
    },
    {
      content: `Tailwind CSS - лучший CSS-фреймворк на планете.`,
      url: 'https://twitter.com/taylorotwell/status/1106539049202999296',
      author: {
        name: 'Bret "The Hitman" Hart',
        role: 'Former WWE Champion',
        avatar: require('@/img/avatars/bret-hart.jpg').default,
      },
    },
    {
      content: `Я начал использовать @tailwindcss. Я сразу влюбился в их адаптивные модификаторы, подробную документацию и то, как легко настраивать цветовые палитры.`,
      url: 'https://twitter.com/dacey_nolan/status/1303744545587441666',
      author: {
        name: 'Dacey Nolan',
        role: 'Software Engineer',
        avatar: require('@/img/avatars/dacey-nolan.jpg').default,
      },
    },

    {
      content: 'Мне он понравился в тот момент, когда я его использовал.',
      url: 'https://twitter.com/GTsurwa/status/1304226774491033601',
      author: {
        name: 'Gilbert Rabut Tsurwa',
        role: 'Web Developer',
        avatar: require('@/img/avatars/gilbert-rabut-tsurwa.jpg').default,
      },
    },
    {
      content:
        'В @tailwindcss есть одна вещь, которая отстой - после того, как вы использовали его в нескольких проектах, писать нормальный CSS снова становится настоящей головной болью.',
      url: 'https://twitter.com/iamgraem_e/status/1322861404781748228',
      author: {
        name: 'Graeme Houston',
        role: 'JavaScript Developer',
        avatar: require('@/img/avatars/graeme-houston.jpg').default,
      },
    },

    {
      content: `Хорошо, я официально *все* участвую в ажиотажном поезде @tailwindcss. Никогда не думал, что создание веб-сайтов может быть настолько смехотворно быстрым и гибким.`,
      url: 'https://twitter.com/lukeredpath/status/1316543571684663298',
      author: {
        name: 'Aaron Bushnell',
        role: 'Programmer @ TrendyMinds',
        avatar: require('@/img/avatars/aaron-bushnell.jpg').default,
      },
    },
    {
      content: 'Хорошо, @tailwindcss только что нажал на меня, и теперь я чувствую себя #!@%&$% идиотом.',
      url: 'https://twitter.com/ken_wheeler/status/1225373231139475458',
      author: {
        name: 'Ken Wheeler',
        role: `React Engineer`,
        avatar: require('@/img/avatars/ken-wheeler.jpg').default,
      },
    },
    {
      content: `Я использую @tailwindcss последние несколько месяцев, и это потрясающе. Раньше я уже использовал некоторые служебные классы, но сначала я буду использовать служебные классы... вот и все.`,
      url: 'https://twitter.com/JadLimcaco/status/1327417021915561984',
      author: {
        name: 'Jad Limcaco',
        role: 'Designer',
        avatar: require('@/img/avatars/jad-limcaco.jpg').default,
      },
    },
    {
      content: `После того, как я наконец смог использовать @tailwindcss в реальном клиентском проекте за последние две недели, я больше никогда не хочу писать CSS вручную. Я был скептиком, но шумиха реальна.`,
      url: 'https://twitter.com/lukeredpath/status/1316543571684663298',
      author: {
        name: 'Luke Redpath',
        role: 'Ruby & iOS Developer',
        avatar: require('@/img/avatars/luke-redpath.jpg').default,
      },
    },
    {
      content:
        "Я не думал, что мне понравится @tailwindcss... потратил день, используя его для POC, в восторге! Хотелось бы, чтобы это было, когда мы начали работу над дизайн-системой нашей компании, серьезно рассматривая полную перестройку",
      url: 'https://twitter.com/JonBloomer/status/1300923818622377984',
      author: {
        name: 'Jon Bloomer',
        role: 'Front-End Developer',
        avatar: require('@/img/avatars/jon-bloomer.jpg').default,
      },
    },
    {
      content: '@tailwindcss сначала выглядела неприятно, но теперь я подсел на нее.',
      url: 'https://twitter.com/droidgilliland/status/1222733372855848961',
      author: {
        name: 'Andrew Gilliland',
        role: 'Front-End Developer',
        avatar: require('@/img/avatars/andrew-gilliland.jpg').default,
      },
    },

    // New 1
    {
      content: 'Как только вы начнете использовать Tailwind, пути назад не будет.',
      url: 'https://twitter.com/pkspyder007/status/1463126688301158400',
      author: {
        name: 'Praveen Kumar',
        avatar: require('@/img/avatars/pkspyder007.jpg').default,
      },
    },
    {
      content:
        'Я использую @tailwindcss для каждого отдельного проекта, потому что он устраняет большинство неудобств CSS и работает в несколько раз быстрее',
      url: 'https://twitter.com/fanduvasu/status/1443396529558011904',
      author: {
        name: 'Vasu Bansal',
        avatar: require('@/img/avatars/fanduvasu.jpg').default,
      },
    },
    {
      content:
        "Это изменило траекторию моего бизнеса. Я могу разрабатывать более привлекательные, более производительные и доступные компоненты в 1/3 случаев.",
      url: 'https://twitter.com/lawjolla/status/1443295146959728643',
      author: {
        name: 'Dennis Walsh',
        avatar: require('@/img/avatars/lawjolla.jpg').default,
      },
    },
    {
      content:
        'Мой первый Tailwind сработал отлично, но по-настоящему круто было вернуться к нему через несколько месяцев и сэкономить столько времени на внесении новых изменений. Я знал, как все сочетается мгновенно.',
      url: 'https://twitter.com/ericlbarnes/status/1303814860879343618',
      author: {
        name: 'Eric L. Barnes',
        avatar: require('@/img/avatars/ericlbarnes.jpg').default,
      },
    },
    {
      content:
        "Tailwind выглядел как спагетти, пока я не использовал его в реальном проекте. Сейчас я делаю сайты только так. Простой, быстрый, масштабируемый.",
      url: 'https://twitter.com/nicksaraev/status/1304200875758428160',
      author: {
        name: 'Nick Saraev',
        avatar: require('@/img/avatars/nicksaraev.jpg').default,
      },
    },
    {
      content:
        'Tailwind - классический пример того, почему при оценке технологий нужно отбросить предубеждения. Опыт и продуктивность намного опережают то, во что вы могли поверить, основываясь на старом мышлении CSS!',
      url: 'https://twitter.com/_lukebennett/status/1303744015943204867',
      author: {
        name: 'Luke Bennett',
        avatar: require('@/img/avatars/_lukebennett.jpg').default,
      },
    },
    {
      content:
        'TailwindCSS - это не похожий ни на какой другой фреймворк. Вместо того, чтобы ограничивать вас набором дизайна, он дает вам инструменты и стандартизацию для создания именно того, что вы хотите.',
      url: 'https://twitter.com/carre_sam/status/1303750185663770625',
      author: {
        name: 'Sam Carré',
        avatar: require('@/img/avatars/carre_sam.jpg').default,
      },
    },
    {
      content:
        'Помню, я был в ужасе, когда впервые увидел утилиту first css. Но за последние месяцы использование Tailwind во все большем количестве проектов было просто новым радостным способом создания вещей в Интернете.',
      url: 'https://twitter.com/evanfuture/status/1303743551583514637',
      author: {
        name: 'Evan Payne',
        avatar: require('@/img/avatars/evanfuture.jpg').default,
      },
    },
    {
      content:
        "Сначала я был настроен скептически, когда начал использовать @tailwindcss, до тех пор, пока мне не потребовалось скопировать компонент @sveltejs в другое место, и мне не нужно было беспокоиться о том, что какой-либо из моих стилей сломается.",
      url: 'https://twitter.com/rotimi_best/status/1407010180760539136',
      author: {
        name: 'Rotimi Best',
        avatar: require('@/img/avatars/rotimi_best.jpg').default,
      },
    },
    {
      content: '@tailwindcss делает вас лучше в CSS. Изменило мои мысли.',
      url: 'https://twitter.com/Dominus_Kelvin/status/1362891692634963973',
      author: {
        name: 'Kelvin Omereshone',
        avatar: require('@/img/avatars/Dominus_Kelvin.jpg').default,
      },
    },
    {
      content:
        "Потрясающий материал! Я не дизайнер и не фронтенд-разработчик; пока я не нашел Tailwind в прошлом году, я не занимался CSS с начала девяностых. Tailwind и Tailwind UI означают, что теперь я могу быстро создавать красивые интерфейсы, что дает мне огромные возможности. Безумно впечатляющий проект.",
      url: 'https://twitter.com/JCMagoo/status/1443334891706454018',
      author: {
        name: 'John W Clarke',
        avatar: require('@/img/avatars/JCMagoo.jpg').default,
      },
    },
    {
      content:
        'Признаюсь, до прошлого года я был большим скептиком по отношению к @tailwindcss. Я подумал: «Зачем мне вводить миллион классов, которые просто абстрагируют отдельные свойства CSS?» К настоящему времени я чувствую, что стал вдвое продуктивнее при создании пользовательского интерфейса. Это действительно потрясающе.',
      url: 'https://twitter.com/tweetsofsumit/status/1460171778337083394',
      author: {
        name: 'Sumit Kumar',
        avatar: require('@/img/avatars/tweetsofsumit.jpg').default,
      },
    },
    {
      content:
        'Я близок к завершению своего многомесячного проекта по переписыванию интерфейса моей компании на TypeScript и @tailwindcss. Тем не менее, каждый раз, когда я повторно реализую компонент, я думаю: «Вау, на этот раз все было намного проще». Tailwind скалы.',
      url: 'https://twitter.com/mannieschumpert/status/1445868384869134336',
      author: {
        name: 'Mannie Schumpert',
        role: 'Co-Founder/CTO @LaunchPathInc',
        avatar: require('@/img/avatars/mannieschumpert.jpg').default,
      },
    },

    // New 2
    // {
    //   content:
    //     'Как ленивый разработчик, мне нравится, что я могу копировать / вставлять HTML-примеры, использующие Tailwind CSS, и это просто работает в моем приложении.',
    //   url: 'https://twitter.com/adamwathan/status/1468648955240230918',
    //   author: {
    //     name: 'Mark Funk',
    //     role: 'UI Engineer at Netflix',
    //     avatar: require('@/img/avatars/.jpg').default,
    //   },
    // },
    {
      content:
        'С учетом того объема поставок, который нам необходимо сделать, пропуска преобразования мозговых волн в CSS и возможности реализовать со скоростью мысли с помощью Tailwind, моя жизнь в качестве разработчика fullstack никогда не была более счастливой.',
      url: 'https://twitter.com/0xholman/status/1468691614453227523',
      author: {
        name: 'Christian Holman',
        avatar: require('@/img/avatars/0xholman.jpg').default,
      },
    },
    {
      content:
        'Tailwind позволяет легко привлекать новых разработчиков к проекту внешнего интерфейса, не беспокоясь о мысленных упражнениях по пониманию иерархии классов «некоторых» разработчиков и мыслительного процесса, стоящего за ней.',
      url: 'https://twitter.com/jilsonthomas/status/1468678743644327942',
      author: {
        name: 'Jilson Thomas',
        role: 'UI Designer/Developer',
        avatar: require('@/img/avatars/jilsonthomas.jpg').default,
      },
    },
    {
      content:
        'Tailwind полностью изменил правила игры для нашей команды разработчиков. Это позволяет нам двигаться быстрее, сохранять согласованность пользовательского интерфейса и сосредоточиться на работе, которую мы хотим выполнять, а не на написании CSS.',
      url: 'https://twitter.com/jakeryansmith/status/1468668828041293831',
      author: {
        name: 'Jake Ryan Smith',
        role: 'Full-Stack Developer',
        avatar: require('@/img/avatars/jakeryansmith.jpg').default,
      },
    },
  ],
  // Column 2
  [
    {
      content:
        'Я работаю с CSS более десяти лет, и Tailwind просто облегчает мне жизнь. Это по-прежнему CSS, и вы используете гибкость, сетку и т. Д., Но просто быстрее писать и поддерживать.',
      url: 'https://twitter.com/debs_obrien/status/1243255468241420288',
      author: {
        name: `Debbie O'Brien`,
        role: 'Senior Program Manager at Microsoft',
        avatar: require('@/img/avatars/debbie-obrien.jpg').default,
      },
    },
    {
      content:
        'Я пишу CSS более 20 лет, и вплоть до 2017 года способ его написания часто менялся. Не случайно, что Tailwind был выпущен в том же году. Это может выглядеть неправильно, но потратьте на это время, и вы поймете, что семантический CSS был ошибкой 20 лет.',
      url: 'https://twitter.com/frontendben/status/1468687028036452363',
      author: {
        name: 'Ben Furfie',
        role: 'Developer',
        avatar: require('@/img/avatars/frontendben.jpg').default,
      },
    },
    {
      content: 'Tailwind заставляет писать код как будто я использую инструмент для дизайна.',
      url: 'https://twitter.com/didiercatz/status/1468657403382181901',
      author: {
        name: 'Didier Catz',
        role: 'Co-Founder @StyptApp',
        avatar: require('@/img/avatars/didiercatz.jpg').default,
      },
    },
    {
      content:
        'Tailwind CSS сокращает разрыв между системами дизайна и продуктами. Фактически он становится API-интерфейсом для стилизации.',
      url: 'https://twitter.com/frontstuff_io/status/1468667263532339204',
      author: {
        name: 'Sarah Dayan',
        role: 'Staff Software Engineer @Algolia',
        avatar: require('@/img/avatars/frontstuff_io.jpg').default,
      },
    },
    {
      content: 'Я больше не хочу писать обычный CSS. Только @tailwindcss.',
      url: 'https://twitter.com/trey/status/1457854984020762626',
      author: {
        name: 'Trey Piepmeier',
        role: 'Web Developer',
        avatar: require('@/img/avatars/trey.jpg').default,
      },
    },
    {
      content:
        'Я пришел на работу, задаваясь вопросом, почему последний разработчик когда-либо внедрил Tailwind в наши проекты, через несколько дней я был преобразован в Tailwind и использовал его для всех своих личных проектов.',
      url: 'https://twitter.com/maddiexcampbell/status/1303752658029740032',
      author: {
        name: 'Madeline Campbell',
        role: 'Full-Stack Developer',
        avatar: require('@/img/avatars/madeline-campbell.jpg').default,
      },
    },
    {
      content:
        'Tailwind снова заставил меня насладиться фронтенд-разработкой и дал мне уверенность в том, что я могу реализовать любой дизайн - каким бы сложным он ни был.',
      url: 'https://twitter.com/marcelpociot/status/1468664587146956803',
      author: {
        name: 'Marcel Pociot',
        role: 'CTO at @beyondcode',
        avatar: require('@/img/avatars/marcelpociot.jpg').default,
      },
    },
    {
      content: 'Tailwind превратил меня в разработчика полного стека.',
      url: 'https://twitter.com/lepikhinb/status/1468665237155074056',
      author: {
        name: 'Boris Lepikhin',
        role: 'Full-Stack Developer',
        avatar: require('@/img/avatars/lepikhinb.jpg').default,
      },
    },
    {
      content:
        "Tailwind - самая легкая и простая часть любого проекта, над которым я работаю. Я не могу представить, что построю что-нибудь большое без этого.",
      url: 'https://twitter.com/assertchris/status/1468651427664908292',
      author: {
        name: 'Christopher Pitt',
        role: 'Developer',
        avatar: require('@/img/avatars/assertchris.png').default,
      },
    },
    {
      content:
        "Tailwind CSS облегчил так много проблем, к которым мы все привыкли с традиционным CSS, что заставляет задуматься, как вы когда-либо разрабатывали веб-сайты без него.",
      url: 'https://twitter.com/ChaseGiunta/status/1468658689569665026',
      author: {
        name: 'Chase Giunta',
        role: 'Developer',
        avatar: require('@/img/avatars/ChaseGiunta.jpg').default,
      },
    },
    {
      content:
        'Пользуясь другими фреймворками CSS, я всегда возвращаюсь к Tailwind CSS, поскольку он дает мне возможность создавать в моих проектах последовательную и простую в использовании систему дизайна. Благодаря Tailwind CSS мне нужна всего одна чашка кофе, чтобы начать новый проект.',
      url: 'https://twitter.com/zaku_dev/status/1468666521895325697',
      author: {
        name: 'Ivan Guzman',
        role: 'Software Engineer',
        avatar: require('@/img/avatars/zaku_dev.png').default,
      },
    },
    {
      content:
        'Я использую TailwindCSS много лет, и, кажется, они каждый год удивляют нас своими обновлениями. Это помогло мне очень быстро создавать веб-сайты, я никогда не смог вернуться к скучным старым классам CSS!',
      url: 'https://twitter.com/heychazza',
      author: {
        name: 'Charlie Joseph',
        role: 'Developer',
        avatar: require('@/img/avatars/heychazza.jpg').default,
      },
    },
    {
      content:
        'Tailwind CSS - это реализация дизайн-системы на чистом CSS. Его также можно настроить. Это дает разработчикам суперсилы. Это позволяет им создавать веб-сайты с чистым и единообразным пользовательским интерфейсом прямо из коробки. Он хорошо интегрируется с любым фреймворком для веб-разработки, потому что это всего лишь CSS! Гений.',
      url: 'https://twitter.com/kahliltweets/status/1468654856617476097',
      author: {
        name: 'Kahlil Lechelt',
        role: 'JavaScript Developer',
        avatar: require('@/img/avatars/kahliltweets.jpg').default,
      },
    },
    {
      content:
        'Медленно перейти на Tailwind, например, с Bootstrap, используя его префиксную функцию. Воспользоваться его функциями, не тратя много времени на предварительный просмотр, просто потрясающе!',
      url: 'https://twitter.com/MarcoSinghof/status/1468654001772244993',
      author: {
        name: 'Marco Singhof',
        role: 'Full-Stack Developer',
        avatar: require('@/img/avatars/MarcoSinghof.jpg').default,
      },
    },
    {
      content:
        'Мне было неудобно использовать CSS, пока я не познакомился с Tailwind. Его простая в использовании абстракция в сочетании с отличной документацией меняют правила игры!',
      url: 'https://twitter.com/joostmeijles/status/1468650757876555778',
      author: {
        name: 'Joost Meijles',
        role: 'Head of Unplatform @avivasolutions',
        avatar: require('@/img/avatars/joostmeijles.jpg').default,
      },
    },
    {
      content:
        "Tailwind превращает реализацию дизайна из рутины в радость. Вы снова влюбитесь в создание Интернета.",
      url: 'https://twitter.com/_swanson/status/1468653854199853057',
      author: {
        name: 'Matt Swanson',
        role: 'Developer',
        avatar: require('@/img/avatars/_swanson.jpg').default,
      },
    },
    {
      content:
        'Tailwind CSS помогает избавиться от сложности абстрагирования стилей. Наличие стилей прямо в вашем HTML - это мощный инструмент, который становится еще более очевидным при использовании таких продуктов, как Tailwind UI.',
      url: 'https://twitter.com/silvenon/status/1468676092504551433',
      author: {
        name: 'Matija Marohnić',
        role: 'Front-End Developer',
        avatar: require('@/img/avatars/silvenon.jpg').default,
      },
    },
    {
      content:
        'Если Tailwind подобен тахионам на стероидах, то пользовательский интерфейс Tailwind подобен Лэнсу Армстронгу, выигравшему Тур де Франс (семь раз). Без, конечно, скандала и позора.',
      url: 'https://twitter.com/hughdurkin/status/1468658970848079872',
      author: {
        name: 'Hugh Durkin',
        role: 'Developer',
        avatar: require('@/img/avatars/hughdurkin.jpg').default,
      },
    },
    {
      content:
        'Меня сжигали другие заброшенные CSS-фреймворки, и я больше всего боялся сделать ставку на еще один фреймворк, который может исчезнуть. Однако я попробовал и не мог быть более счастливым. Они регулярно улучшают структуру и вносят существенный вклад в ее развитие. Он кажется очень живым.',
      url: 'https://twitter.com/wolax/status/1468653118443470848',
      author: {
        name: 'Matthias Schmidt',
        role: 'Programmer',
        avatar: require('@/img/avatars/wolax.jpg').default,
      },
    },
    {
      content:
        'Получение поддержки TailwindCSS со стороны всей нашей команды разработчиков потребовало времени и обсуждения, но после того, как мы внедрили в масштабах всей компании, любому разработчику стало проще простого подключиться к любому проекту и быстро внести изменения / улучшения.',
      url: 'https://twitter.com/jerredchurst/status/1468657838494998530',
      author: {
        name: 'Jerred Hurst',
        role: 'CTO Primitive',
        avatar: require('@/img/avatars/jerredchurst.jpg').default,
      },
    },
    {
      content:
        "Tailwind CSS в то же время сделал CSS приятным и радикально изменил то, как я создаю продукты. Это быстро, эффективно, работать с ним - одно удовольствие.",
      url: 'https://twitter.com/braunshizzle/status/1468676003941830666',
      author: {
        name: 'Braunson Yager',
        role: 'Full Stack Developer & Designer',
        avatar: require('@/img/avatars/braunshizzle.jpg').default,
      },
    },
    {
      content:
        'На данный момент использование любой CSS-инфраструктуры, кроме Tailwind, кажется шагом назад в веб-разработке. Абсолютно ничто другое не может сделать меня таким продуктивным на этапе проектирования, как Tailwind.',
      url: 'https://twitter.com/zac_zajdel/status/1468662057079914499',
      author: {
        name: 'Zac Jordan Zajdel',
        role: 'Developer',
        avatar: require('@/img/avatars/zac_zajdel.jpg').default,
      },
    },
    {
      content:
        'Tailwind полностью изменил нашу систему разработки DevOps. Интерфейс командной строки работает стабильно независимо от того, какая структура используется.',
      url: 'https://twitter.com/joelvarty/status/1468671752356126728',
      author: {
        name: 'Joel Varty',
        role: 'President & CTO @agilitycms',
        avatar: require('@/img/avatars/joelvarty.jpg').default,
      },
    },
    {
      content:
        'Tailwind похож на пару действительно хороших носков. Вы думаете: «Хорошо, а насколько хорошими могут быть носки». Затем вы надеваете носки и говорите: “%@#! это носки”.',
      url: 'https://twitter.com/NeilDocherty/status/1468668979698937859',
      author: {
        name: 'Neil Docherty',
        role: 'Software Engineer',
        avatar: require('@/img/avatars/NeilDocherty.jpg').default,
      },
    },
    {
      content:
        'Tailwind объединил нашу работу css для разных клиентских проектов больше, чем любая другая методология, позволив нам сохранить индивидуальный дизайн и даже улучшить производительность и стабильность наших сайтов.',
      url: 'https://twitter.com/skttl/status/1468669231864725514',
      author: {
        name: 'Søren Kottal',
        role: 'Developer',
        avatar: require('@/img/avatars/skttl.jpg').default,
      },
    },
    {
      content: 'Tailwind единственный способ масштабно работать с CSS. ',
      url: 'https://twitter.com/aarondfrancis/status/1468696321607544840',
      author: {
        name: 'Aaron Francis',
        role: 'Developer',
        avatar: require('@/img/avatars/aarondfrancis.jpg').default,
      },
    },
    {
      content:
        "TailwindCSS в одиночку стал самым большим и самым значительным изменением в рабочем процессе разработки нашей команды. Я рад, что живу во вселенной, где существует Tailwind.",
      url: 'https://twitter.com/Megasanjay/status/1468674483099557890',
      author: {
        name: 'Sanjay Soundarajan',
        role: 'Front-End Developer',
        avatar: require('@/img/avatars/Megasanjay.jpg').default,
      },
    },
    {
      content:
        'Tailwind элегантно решает сложную проблему. Он предоставляет готовый к использованию пользовательский интерфейс, при этом не делая компромиссов, позволяя разработчикам быстро создавать все, что только можно вообразить.',
      url: 'https://twitter.com/brentgarner/status/1468676369143926789',
      author: {
        name: 'Brent Garner',
        role: 'Developer',
        avatar: require('@/img/avatars/brentgarner.jpg').default,
      },
    },
  ],
  // Column 3
  [
    {
      content: 'Перейти до конца. Используйте @tailwindcss.',
      url: 'https://twitter.com/kentcdodds/status/1468692023158796289',
      author: {
        name: 'Kent C. Dodds',
        role: 'Developer and Educator',
        avatar: require('@/img/avatars/kentcdodds.jpg').default,
      },
    },
    {
      content:
        'Я плохо разбирался в интерфейсе, пока не открыл для себя Tailwind CSS. Я узнал намного больше о дизайне и самом CSS после того, как начал работать с Tailwind. Создание веб-страниц теперь в 5 раз быстрее.',
      url: 'https://twitter.com/shrutibalasa',
      author: {
        name: 'Shruti Balasa',
        role: 'Full Stack Web Developer & Tech Educator',
        avatar: require('@/img/avatars/shrutibalasa.jpg').default,
      },
    },
    {
      content: "Я не использую это, но если бы я использовал что-нибудь, я бы использовал Tailwind!",
      url: 'https://twitter.com/levelsio/status/1288542608390856705',
      author: {
        name: 'Pieter Levels',
        role: 'Maker',
        avatar: require('@/img/avatars/levelsio.jpg').default,
      },
    },
    {
      content:
        'С Tailwind я могу предложить своим клиентам более быстрое выполнение пользовательских тем WordPress, как для начальных сборок, так и для будущих версий.',
      url: 'https://twitter.com/gregsvn/status/1468667690042617857',
      author: {
        name: 'Greg Sullivan',
        role: 'WordPress Developer',
        avatar: require('@/img/avatars/gregsvn.jpg').default,
      },
    },
    {
      content: 'Благодаря @tailwindcss CSS стал мне понятен.',
      url: 'https://twitter.com/enunomaduro/status/1468650695104647170',
      author: {
        name: 'Nuno Maduro',
        role: 'Core Team Member @laravelphp',
        avatar: require('@/img/avatars/enunomaduro.jpg').default,
      },
    },
    {
      content:
        "Tailwind щелкнул для меня почти сразу. Я не могу представить, что когда-либо буду писать еще один БЭМ-класс. Счастливый пользователь с момента первого публичного релиза! Благодаря @tailwindcss продуктивность всегда высока.",
      url: 'https://twitter.com/igor_randj/status/1468654576576380930',
      author: {
        name: 'Igor Randjelovic',
        role: 'Developer',
        avatar: require('@/img/avatars/igor_randj.jpg').default,
      },
    },
    {
      content:
        'CSS всегда был самой сложной частью предложения цифровых услуг. Это заставило меня почувствовать себя плохим разработчиком. Tailwind  снова вселяет в меня уверенность в веб-разработке. Их документы - мой первый портал.',
      url: 'https://twitter.com/ohhdanm/status/1468653056988528643',
      author: {
        name: 'Dan Malone',
        role: 'Founder of @mawla_io',
        avatar: require('@/img/avatars/ohhdanm.jpg').default,
      },
    },
    {
      content:
        'Я подумал: «Зачем мне Tailwind CSS? Я уже знаю CSS и использую Bootstrap», но, попробовав, решил переключить все свои проекты на Tailwind.',
      url: 'https://twitter.com/sertxudev/status/1468660429715030019',
      author: {
        name: 'Sergio Peris',
        role: 'DevOps Engineer & Network Administrator',
        avatar: require('@/img/avatars/sertxudev.jpg').default,
      },
    },
    {
      content:
        'Документация Tailwind - это его настоящее волшебство. На самом деле он документирован лучше, чем сам CSS. Использовать такое удовольствие.',
      url: 'https://twitter.com/zachknicker/status/1468662554658443264',
      author: {
        name: 'Zach Knickerbocker',
        role: 'Developer',
        avatar: require('@/img/avatars/zachknicker.jpg').default,
      },
    },
    {
      content:
        "Я никогда не чувствовал себя более уверенно при проектировании и стилизации веб-сайтов и веб-приложений, чем когда я использовал TailwindCSS.",
      url: 'https://twitter.com/grossmeyer/status/1468671286415089666',
      author: {
        name: 'Glenn Meyer',
        role: 'Developer',
        avatar: require('@/img/avatars/grossmeyer.jpg').default,
      },
    },
    {
      content:
        'Пробовал однажды, ни разу не оглядывался. Tailwindcss конвертируется с версии 0.7 и становится все лучше и лучше.',
      url: 'https://twitter.com/Jan_DHollander/status/1468653579405770754',
      author: {
        name: "Jan D'Hollander",
        role: 'Front-End Developer',
        avatar: require('@/img/avatars/Jan_DHollander.jpg').default,
      },
    },
    {
      content:
        'Если вы работаете в агентстве и имеете дело с сотнями уникальных сайтов, у каждого из них есть собственный CSS-код - просто кошмар. Сделайте себе одолжение и воспользуйтесь Tailwind!',
      url: 'https://twitter.com/waunakeesoccer1/status/1468736369757466625',
      author: {
        name: 'Andrew Brown',
        avatar: require('@/img/avatars/waunakeesoccer1.jpg').default,
      },
    },
    {
      content:
        'До Tailwind CSS я бился головой о стену, пытаясь понять смысл моих CSS-спагетти. Теперь бьюсь головой о стену, гадая, почему не попробовала раньше. У меня болит голова, а в стене большая дыра. Но, по крайней мере, снова приятно пользоваться CSS!',
      url: 'https://twitter.com/marckohlbrugge/status/1468731283400536071',
      author: {
        name: 'Marc Köhlbrugge',
        avatar: require('@/img/avatars/marckohlbrugge.jpg').default,
      },
    },
    {
      content:
        'Сначала я был настроен скептически и сопротивлялся долгое время, но после выполнения первых проектов с Tailwind CSS в этом году нормальный CSS просто казался неправильным и медленным.',
      url: 'https://twitter.com/davidhellmann/status/1468703979232272398',
      author: {
        name: 'David Hellmann',
        role: 'Digital Designer & Developer',
        avatar: require('@/img/avatars/davidhellmann.jpg').default,
      },
    },
    {
      content:
        "После первого использования Tailwind я задумался, зачем я использовал что-то еще. Теперь это мой фреймворк CSS для любого приложения, производства или прототипа.",
      url: 'https://twitter.com/all_about_code/status/1468651643210240000',
      author: {
        name: 'Joshua Lowe',
        role: 'Developer',
        avatar: require('@/img/avatars/all_about_code.jpg').default,
      },
    },
    {
      content:
        'Tailwind не только позволил мне сосредоточиться на создании отличного пользовательского интерфейса, но и улучшил мои общие навыки работы с CSS, имея такой замечательный сайт документации, когда мне нужно было писать CSS от руки.',
      url: 'https://twitter.com/joshmanders/status/1468710484396359681',
      author: {
        name: 'Josh Manders',
        role: 'Developer',
        avatar: require('@/img/avatars/joshmanders.jpg').default,
      },
    },
    {
      content:
        'Использование Tailwind - это ускоритель для быстрого создания прототипов систем проектирования. Сильная документация, полезное сообщество и мгновенные результаты.',
      url: 'https://twitter.com/igaenssley/status/1468674047328370690',
      author: {
        name: 'Ian Gaenssley',
        role: 'Design Operations Lead at BetterCloud',
        avatar: require('@/img/avatars/igaenssley.jpg').default,
      },
    },
    {
      content:
        'Я инстинктивно ненавидел утилиту CSS, но Tailwind полностью меня преобразовал. Это возродило мое волнение по поводу фронтенд-разработки и реализации нестандартных дизайнов!',
      url: 'https://twitter.com/jessarchercodes/status/1468743738545434626',
      author: {
        name: 'Jess Archer',
        role: 'Full-Stack Developer',
        avatar: require('@/img/avatars/jessarchercodes.png').default,
      },
    },
    {
      content:
        'Tailwind CSS устраняет разрыв между дизайном и разработкой больше, чем что-либо другое. Он повторно вводит контекст для разработки, ограничивает когнитивную нагрузку с помощью архитектуры выбора, предоставляет доступ к библиотеке токенов из коробки и невероятно прост в использовании. Это очень помогло моей дизайнерской карьере.',
      url: 'https://twitter.com/CoreyGinnivan/status/1468698985435041794',
      author: {
        name: 'Corey Ginnivan',
        role: 'Co-Founder of FeatureBoard',
        avatar: require('@/img/avatars/CoreyGinnivan.jpg').default,
      },
    },
    {
      content:
        "Когда я работаю над проектом, в котором не используется Tailwind, сначала я кричу, затем глубоко вздыхаю, а затем запускаю npm install tailwindcss.",
      url: 'https://twitter.com/ryanchenkie/status/1468675898559840263',
      author: {
        name: 'Ryan Chenkie',
        avatar: require('@/img/avatars/ryanchenkie.jpg').default,
      },
    },
    {
      content:
        "Вернуться на большой веб-сайт, на котором не используется Tailwind, - все равно что прыгнуть из Tesla в ржавый фермерский грузовик моего отца в Миннесоте. Конечно, работает, но сцепление пробуксовывает, тормоза почти не работают, и оно забито старыми шинами, которые мы даже больше не используем.",
      url: 'https://twitter.com/dangayle/status/1468738215431467008',
      author: {
        name: 'Dan Gayle',
        role: 'Senior Front-End Developer @CrateandBarrel',
        avatar: require('@/img/avatars/dangayle.jpg').default,
      },
    },
    {
      content:
        'Сначала я сильно оттолкнулся от упоминания о Tailwind из-за количества классов в моем коде, однако в течение 5 минут или с его использованием я был зацеплен и теперь являюсь раздражающим парнем, подталкивающим Tailwind ко всем, кто будет слушать. Это упростило мой рабочий процесс разработки вне всяких измерений.',
      url: 'https://twitter.com/dbrooking/status/1468718511040126982',
      author: {
        name: 'Dan Brooking',
        role: 'Head Engineer @SubscriptionBox',
        avatar: require('@/img/avatars/dbrooking.jpg').default,
      },
    },
    {
      content:
        'Я никогда не утруждал себя изучением ванильного CSS, потому что это пустая трата времени - зачем беспокоиться, если вместо этого у меня есть Tailwind? Оказывается, я все равно выучил тонну CSS, просто используя Tailwind. Это идеальная середина между продуманной абстракцией и при этом позволяющей вырваться на свободу.',
      url: 'https://twitter.com/TrevorCampbell_/status/1468739918662930432',
      author: {
        name: 'Trevor Campbell',
        avatar: require('@/img/avatars/TrevorCampbell_.jpg').default,
      },
    },
    {
      content:
        "Tailwind и окружающая его экосистема подобны гигантскому турбонагнетателю для веб-агентств. Это помогает командам разработчиков и дизайнеров разработать общий язык и систему ограничений, которые ускоряют весь процесс. Это кардинальное изменение для эффективной командной работы.",
      url: 'https://twitter.com/sagalbot/status/1468727120218103809',
      author: {
        name: 'Jeff Sagal',
        role: 'Full-Stack Developer',
        avatar: require('@/img/avatars/sagalbot.jpg').default,
      },
    },
    {
      content:
        'Tailwind обеспечивает стиль индивидуального дизайна, ограниченность системы дизайна и гибкость, позволяющую делать ее бесконечно настраиваемой, без необходимости заставлять каждый веб-сайт выглядеть так, как будто он был вырезан из одной ткани.',
      url: 'https://twitter.com/michaeldyrynda/status/1468720374657392645',
      author: {
        name: 'Michael Dyrynda',
        role: 'Australian',
        avatar: require('@/img/avatars/michaeldyrynda.jpg').default,
      },
    },
    {
      content:
        'Tailwind полностью изменил мою карьеру фрилансера, позволив мне очень быстро создавать полностью индивидуальные проекты без написания CSS.',
      url: 'https://twitter.com/jasonlbeggs/status/1468666464911736835',
      author: {
        name: 'Jason Beggs',
        role: 'Front-End Developer',
        avatar: require('@/img/avatars/jasonlbeggs.jpg').default,
      },
    },
    {
      content: 'Использование TailwindCSS заставит вас почувствовать, что вы только что разблокировали чит-код.',
      url: 'https://twitter.com/dpaluy/status/1468678245327454211',
      author: {
        name: 'David Paluy',
        role: 'CTO @Quartix',
        avatar: require('@/img/avatars/dpaluy.png').default,
      },
    },
    {
      content:
        'Каждый разработчик, которого я убедил попробовать Tailwind, вернулся и сказал, что никогда не вернется. Каждый. Одинокий. Один.',
      url: 'https://twitter.com/jacobgraf/status/1468931374245687298',
      author: {
        name: 'Jacob Graf',
        role: 'Web Developer',
        avatar: require('@/img/avatars/jacobgraf.jpg').default,
      },
    },
  ],
]

function Testimonial({ author, content, url, expanded }) {
  let [focusable, setFocusable] = useState(true)
  let ref = useRef()

  useEffect(() => {
    if (ref.current.offsetTop !== 0) {
      setFocusable(false)
    }
  }, [])

  return (
    <li ref={ref} className="text-sm leading-6">
      <figure className="relative flex flex-col-reverse bg-slate-50 rounded-lg p-6 dark:bg-slate-800 dark:highlight-white/5">
        <blockquote className="mt-6 text-slate-700 dark:text-slate-300">
          {typeof content === 'string' ? <p>{content}</p> : content}
        </blockquote>
        <figcaption className="flex items-center space-x-4">
          <img
            src={author.avatar}
            alt=""
            className="flex-none w-14 h-14 rounded-full object-cover"
            loading="lazy"
          />
          <div className="flex-auto">
            <div className="text-base text-slate-900 font-semibold dark:text-slate-300">
              {url ? (
                <a href={url} tabIndex={focusable || expanded ? 0 : -1}>
                  <span className="absolute inset-0" />
                  {author.name}
                </a>
              ) : (
                author.name
              )}
            </div>
            <div className="mt-0.5">{author.role}</div>
          </div>
        </figcaption>
      </figure>
    </li>
  )
}

export function Testimonials() {
  let ref = useRef()
  let [expanded, setExpanded] = useState(false)
  let [showCollapseButton, setShowCollapseButton] = useState(false)
  let [transition, setTransition] = useState(false)
  let { ref: inViewRef, inView } = useInView({ threshold: 0 })
  let initial = useRef(true)

  useIsomorphicLayoutEffect(() => {
    if (initial.current) {
      initial.current = false
      return
    }
    if (expanded) {
      ref.current.focus({ preventScroll: expanded })
    } else {
      ref.current.focus()
      ref.current.scrollIntoView()
    }
    if (expanded) {
      setShowCollapseButton(false)
    }
  }, [expanded])

  useEffect(() => {
    setTimeout(() => setTransition(expanded), 0)
  }, [expanded])

  useEffect(() => {
    if (!expanded || !inView) return
    function onScroll() {
      let bodyRect = document.body.getBoundingClientRect()
      let rect = ref.current.getBoundingClientRect()
      let middle = rect.top + rect.height / 4 - bodyRect.top - window.innerHeight / 2
      let isHalfWay = window.scrollY > middle
      if (showCollapseButton && !isHalfWay) {
        setShowCollapseButton(false)
      } else if (!showCollapseButton && isHalfWay) {
        setShowCollapseButton(true)
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll, { passive: true })
    }
  }, [expanded, showCollapseButton, inView])

  return (
    <section
      ref={ref}
      tabIndex="-1"
      className="relative max-w-7xl mx-auto px-4 focus:outline-none sm:px-3 md:px-5"
    >
      <h2 className="sr-only">Testimonials</h2>
      <div
        ref={inViewRef}
        className={clsx(
          'grid grid-cols-1 gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3',
          !expanded && 'max-h-[33rem] overflow-hidden'
        )}
      >
        {testimonials.map((column, i) => (
          <ul
            key={i}
            className={clsx(
              'space-y-8',
              i === 1 && 'hidden sm:block',
              i === 2 && 'hidden lg:block'
            )}
          >
            {column.map((testimonial) => (
              <Testimonial key={testimonial.author.name} expanded={expanded} {...testimonial} />
            ))}
          </ul>
        ))}
      </div>
      <div
        className={clsx(
          'inset-x-0 bottom-0 flex justify-center bg-gradient-to-t from-white pt-32 pb-8 pointer-events-none dark:from-slate-900',
          expanded ? 'sticky -mt-52' : 'absolute',
          transition && 'transition-opacity duration-300',
          expanded && (showCollapseButton ? 'opacity-100' : 'opacity-0')
        )}
      >
        <button
          type="button"
          className={clsx(
            'relative bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 text-sm text-white font-semibold h-12 px-6 rounded-lg flex items-center dark:bg-slate-700 dark:hover:bg-slate-600',
            transition && 'transition-transform',
            expanded && !showCollapseButton && 'translate-y-4',
            (!expanded || showCollapseButton) && 'pointer-events-auto'
          )}
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? 'Хорошо, я понял' : 'Показать еще...'}
        </button>
      </div>
    </section>
  )
}
