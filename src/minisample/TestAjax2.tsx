
// refs
// https://www.yoheim.net/blog.php?q=20170107

export function fetchResponse2():any{
    
    return fetch('/data/db2.json')
    .then( res => {
        return res.json();
    } )
    .then( res => {
      
      this.setState({
        //question : res.todos[0].title
        question : "change question desu"

      });

    })
  }

//fetchResponse2();
