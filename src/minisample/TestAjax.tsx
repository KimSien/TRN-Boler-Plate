
// refs
// https://www.yoheim.net/blog.php?q=20170107

export function fetchResponse():any{
    fetch('/data/db.json')
    .then( res => {
        //console.log(res.json());   
        //console.log(1);     
        return res.json();
    } )
    .then( res => {
        console.log(2);     
        console.log(res);
        console.log(res.todos[0]);

      /*this.setState({
        todo : res
      });
      */
      
    })
  }

//fetchResponse();
