import {createRouter, createWebHistory} from 'vue-router'
import { getCookie, setCookie } from "../utils/cookies";


const routes = [
  {
    path: '/',
    name: 'Home',
    component: () =>
        import ('../views/HomeView.vue'),
    meta: {
        title: 'Yooz | Home',
        meta: [
            { property: 'og:title', content: "Memomental - insciption - connexion - commencer à jouer" },
            { property: 'og:site_name', content: 'Memomental' },
            { property: 'og:type', content: 'website' },
        ]
    },
  },
  {
    path: '/credentials/',
    name: 'Credentials',
    component: () =>
        import ('../views/Credentials.vue'),
    meta: {
        title: 'Yooz | Credentials',
        meta: [
            { property: 'og:title', content: "Memomental - insciption - connexion - commencer à jouer" },
            { property: 'og:site_name', content: 'Memomental' },
            { property: 'og:type', content: 'website' },
        ]
    },
  },
  {
    path: '/bookingdesk/',
    name: 'Bookingdesk',
    component: () =>
        import ('../views/BookingDesk.vue'),
    meta: {
        title: 'Yooz | Bookingdesk',
        meta: [
            { property: 'og:title', content: "Memomental - insciption - connexion - commencer à jouer" },
            { property: 'og:site_name', content: 'Memomental' },
            { property: 'og:type', content: 'website' },
        ]
    },
  },
  {
    path: '/searchpeople/',
    name: 'SearchPeople',
    component: () =>
        import ('../views/SearchPeople.vue'),
    meta: {
        title: 'Yooz | SearchPeople',
        meta: [
            { property: 'og:title', content: "Memomental - insciption - connexion - commencer à jouer" },
            { property: 'og:site_name', content: 'Memomental' },
            { property: 'og:type', content: 'website' },
        ]
    },
  },
  {
    path: '/choosedepartment/',
    name: 'ChooseYourDepartment',
    component: () =>
        import ('../views/ChooseYourDepartment.vue'),
    meta: {
        title: 'Yooz | ChooseYourDepartment',
        meta: [
            { property: 'og:title', content: "Memomental - insciption - connexion - commencer à jouer" },
            { property: 'og:site_name', content: 'Memomental' },
            { property: 'og:type', content: 'website' },
        ]
    },
  },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
  

router.beforeEach((to, from, next) => {
  const publicURLs = ['Home', 'Credentials', 'Bookingdesk', 'SearchPeople', 'ChooseYourDepartment']
  document.title = to.meta.title;
  const token = getCookie('token');
  if (token == null && !publicURLs.includes(to.name)) {
      if (to.name === 'Share') {
          setCookie('sharePackageLink', window.location.href, 10)
      } else {
          return next({ path: '/' });
      }
  } else {
      return next();
  }
});

router.onError(error => {
  console.log(error)
  if (getCookie('chunk-failed')) {
      console.log('Already retry to fetch new version')
      return;
  } else {
      console.log('Retry to fetch new version')
      window.location.reload()
      setCookie('chunk-failed', true, 0.01)
  }
})


export default router
