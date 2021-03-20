import { render } from "react-dom";

        
    rows = []
    if (category == 'all'){
           rows = items; 
    }else if (category == 'active'){
        items.map( item => {
            if (item.completed == false) {
                rows.push(item);
            }
        } )
    }else if (category == 'completed'){
        items.map( item => {
            if (item.completed == true) {
                rows.push(item);
            }
        } )
    }

items.maoit(
        rows.map(row => {
            <TodoItem item={ row }> </TodoItem>
        })
        )