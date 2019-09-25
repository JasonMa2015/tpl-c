export default [{
  path: '/',
  redirect: '/home',
  name: 'home',
  component: () =>
    import('@/views/home/Home')

}, {
  path: '/home',
  name: 'Home',
  component: () =>
    import('@/views/home/Home')
}]
