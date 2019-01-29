

### Planning a React app
[Planning a react app](./notes/Planning a react app.png)

* Component tree / component structure
* Application state (Data)
* Components v containers.


### Plan

#### Burger builder
  * header 
     * logo
     * nav bar (builder, orders)
  * body
    * pictorial illustration of the burger buing built
    * price
    * list of ingredients (add / remove)
    * checkout button

#### [Component tree](./Component tree.png)
  * App
    * Layout component
      * Toolbar
        * Drawer toggle
        * Logo
        * Navigation items
      * Side drawer (for mobile)
        * Logo
        * Backdrop 
          * Navigation items  
      * {props.children} Routing
        * Burger builder
          * Build controls
            * List of build control components (ingredients)
            * Order button
          * Burger preview
            * List of ingredients
          * Modal checkout preview

#### Planning the state
  * ingredients
    * {meat: 1, cheese: 1}
  * purchased: true
  * totalPrice: 12:40

  * Manage the state in Burger Builder becasue the state is most relevant at that level so make it a stateful component

### Firebase
* react-my-burger-eac51
* https://react-my-burger-eac51.firebaseio.com/