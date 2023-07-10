import Route from '@ioc:Adonis/Core/Route'

Route.post('register', 'AuthController.register').as('auth.register') // ++
Route.post('login', 'AuthController.login').as('auth.login')          // ++
Route.get('logout', 'AuthController.logout').as('auth.logout')        // ++


Route.get('/login', async ({ view , auth,response }) => {

  await auth.use('web').authenticate();
  if(auth.use('web').isLoggedIn){
    response.redirect().toPath('/home')
  }
  return view.render('welcome')
})

Route.get('/', async ({ view , auth,response }) => {

  await auth.use('web').authenticate();
  if(auth.use('web').isLoggedIn){
    response.redirect().toPath('/home')
  }
  return view.render('welcome')
})


Route.get('/register', async ({ view,auth,response }) => {
  await auth.use('web').authenticate();
  if(auth.use('web').isLoggedIn){
    response.redirect().toPath('/home')
  }
  return view.render('register')
})

Route.get('/home', async ({ view }) => {
  return view.render('page/home')
}).middleware('auth')


