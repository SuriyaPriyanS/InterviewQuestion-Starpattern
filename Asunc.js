function element (tag, classname, id, text) {
    let tags = document.createElement(tag);
    tags.classList = classname;
    tags.id = id;
    tags.innerHTML = text;
    return tags;
  }
  
  let container = element ("div", "container", "", "");
  const h1 = element("h1", "text-center", "title", "countre weather details")
  const row = element("div", "row", "", "");
  
  const response = fetch("https://restcountries.com/v3.1/all");
  response.then((data)=> data.json()).then((result)=> {
    // console.log(result)
    for(let i =0; i<result.length;i++){
      const col = document.createElement("div")
      col.classList = "col-sm-6 col-md-4 col-lg-4 col-xl-4"
      col.innerHTML =`<div class = "card <h-100>
      <div class="card-header">
      <h5 class = "card-title text-center">${result[i].name.common}
      </h5>
      </div> = "img-box">
      <img src="${result[i].flags.svg}" class="card-img-top" alt="country-image"/>
      </div>
      </div>`
      
    }
  });
  
  container.append(row);
  document.body.append(h1,container);
  
  