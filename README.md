/s
### `Guess Numbers`
### `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `React App`

I decided to use React Js with typeScript to build this app to get efficent results through component base approch.
along with `styled-components`.

### How Random Slice is highlighliting?

A setInterval function is called when user click on start button. this setInterval call a function *handleRandom* that runs 12 times in 5 seconds. Each time Random number (Index) is genrated that picks target value from our list *currentData* then this item is highlighted against all slices and the function also check if previous one is highlighted set it to false.

In parallel I store this highlighted sequenece in array which later used to match with user input. 

When user press start or he/she enter sequence in input without pressing start game an alert is genrated to please start game first.

After submitting the sequence, genrated sequence is matched with user input if its true banner is displayed with pass or fail statment according to the result.
