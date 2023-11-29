{{ 'buying-guide.css' | asset_url | stylesheet_tag }}
<div class="max-width po-rel">
  <ul class="container container-lg tab-display">
    <li class="first-level tab-level active center">
      <h2 class="section-heading">{{ section.settings.first-section-heading }}</h2>
      <ul class="option-selector row center">
        
      </ul>
      <div class="instructions">
        <h3 class="instruction-heading heading">Your item's voltage rating should fall within these three groups:</h3>
        <ul class="instruction-image-table row center">
          <li class="instruction-item instruction col-6 col-md-4 col-lg-3">
            <div class="instruction-wrapper">
              <div class="media">
                <img src="https://cdn.shopify.com/s/files/1/0665/1733/6280/files/firstOne.png?v=1689945722" loading="lazy" alt="voltage to Watt converter">
              </div>
              <div class="serial">
                A
              </div>
              <div class="content">
                <span>100-240V</span><span>also known as</span><span>Dual Voltage</span>
              </div>
            </div>
          </li>
          <li class="instruction-item instruction col-6 col-md-4 col-lg-3">
            <div class="instruction-wrapper">
              <div class="media">
                <img src="https://cdn.shopify.com/s/files/1/0665/1733/6280/files/firstTwo.png?v=1690346316" loading="lazy" alt="voltage to Watt converter">
              </div>
              <div class="serial">
                B
              </div>
              <div class="content">
                <span>120V</span><span>or</span><span>110-125V</span>
              </div>
            </div>
          </li>
          <li class="instruction-item instruction col-6 col-md-4 col-lg-3">
            <div class="instruction-wrapper">
              <div class="media">
                <img src="https://cdn.shopify.com/s/files/1/0665/1733/6280/files/firstThree.png?v=1690346325" loading="lazy" alt="voltage to Watt converter">
              </div>
              <div class="serial">
                C
              </div>
              <div class="content">
                <span>230V</span><span>or</span><span>220-240V</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </li>
    <li class="second-level tab-level center">
      <h2 class="section-heading">{{ section.settings.second-section-heading }}</h2>
      <ul class="option-selector row center">
      </ul>
      <div class="instructions">
        <h3 class="instruction-heading heading">Instructions:</h3>
        <p clas="description">If your item doesn't have the watt rating then calculate it by multiplying AC voltage x Amp rating.</p>
        <ul class="instruction-image-table row center">
          <li class="instruction-item instruction col-6 col-md-4 col-lg-3">
            <div class="instruction-wrapper">
              <div class="media">
                <img src="https://cdn.shopify.com/s/files/1/0665/1733/6280/files/secondFirst.png?v=1690350950" loading="lazy" alt="voltage to Watt converter">
              </div>
              <div class="serial">
                A
              </div>
              <div class="content">
                <span>23W</span>
              </div>
            </div>
          </li>
          <li class="instruction-item instruction col-6 col-md-4 col-lg-3">
            <div class="instruction-wrapper">
              <div class="media">
                <img src="https://cdn.shopify.com/s/files/1/0665/1733/6280/files/secondSecond.png?v=1690350950" loading="lazy" alt="voltage to Watt converter">
              </div>
              <div class="serial">
                B
              </div>
              <div class="content">
                <span>220V - 500mA</span>
              </div>
            </div>
          </li>
          <li class="instruction-item instruction col-6 col-md-4 col-lg-3">
            <div class="instruction-wrapper">
              <div class="media">
                <img src="https://cdn.shopify.com/s/files/1/0665/1733/6280/files/secondThird.png?v=1690350949" loading="lazy" alt="voltage to Watt converter">
              </div>
              <div class="serial">
                C
              </div>
              <div class="content">
                <span>240V - 1.8A</span>
              </div>
            </div>
          </li>
        </ul>
        <ul class="instruction-list no-list">
          <li class="instruction-item">*Fairly simple, as 'W' is clearly stated in this case 23W.</li>
          <li class="instruction-item">Calculate W = V x A, and 1000 mA is 1A so in this case 220V x 0.50A = 110W</li>
          <li class="instruction-item">Calculate W = V x A, so in this case 240V x 1.8A = 432W.</li>
        </ul>
        <p>*Note you may find a range of wattage rating, i.e 1200W - 2000W on an item so in that case select the MAX wattage rating.</p>
      </div>
    </li>
    <li class="third-level tab-level center">
      <h2 class="section-heading">{{ section.settings.third-section-heading }}</h2>
      <ul class="option-selector row center">
        
      </ul>
    </li>
    <div class="button button--secondary reset-button" onclick="location.reload()">{% render 'back-icon' %} Reset Data</div>
  </ul>
  <span class="loading-section center active">
    <span class="loading-text center">
    Loading
    </span>
  </span>
</div>
<!--- find this comment {{ page.metafields.custom.csv_file.value.url }}---->
<script defer>
  function main() {
  let mainObj;
    let selectedOptions = [];
  const loadingSection = document.querySelector(".loading-section");
  function setLoading(situation) {
    situation
      ? loadingSection.classList.add("active")
      : loadingSection.classList.remove("active");
  }
  function toggleTab(all, selected){
    all.forEach(item => item.classList.remove('active'));
    selected.classList.add('active');
  }
  function htmlize(destination, data){
    destination.innerHtml = '';
    data.forEach(item=> destination.appendChild(item));
    setLoading(false);
    return destination
  }
  function spreader(options){
    let hasProducts = true;
    console.log(options)
    if(options.length<2){
      if(options[0].value && options[0].value.filter(item=> item.includes('https')).length>0){
        hasProducts = false;
      }
    }
    
	let liElements = []
	options.forEach((item, pos) => {
	var li = document.createElement('li');
	var div = document.createElement('div');
	li.classList.add('option-item','center');
      
    div.textContent = item.option;
    console.log('hasProducts is ' + hasProducts);
    if(hasProducts){
      li.classList.add('col-6', 'col-md-4','col-lg-2');
      div.classList.add('content-wrapper');
      console.log('if worked');
            fetch(window.Shopify.routes.root+'products/'+item+'.js').then(result => result.json()).then(data => {
          const product = data;
          div.innerHTML = `<a href="${product.url}">
                            <div class="product-wrapper">
                              <div class="media">
                                <img class="product-image" src= ${product.featured_image}>
                              </div>
                              <div class="content">
                              <h3 class="product-title">Model No. ${product.variants[0].sku}</h3>
                              <button class="suggested-product-button button button--primary 
button--filled button--primary__filled">Shop Now</button>
                              </div>
                          </div>
                          </a>
                          `
        });
    }
      else {
        li.classList.add('only-option');
        document.querySelector('.tab-level.active .option-selector').classList.add('single-option','no-list');
        div.innerHTML = `<p class="single-item-description">${item.option}</p> <a class="button content-wrapper single-link" href='${item.value[0]}'>Visit Here</a>`;
    }
	
	li.appendChild(div);
	liElements.push(li);
	})
	return liElements
  }
  function firstLevel(source){
   htmlize(document.querySelector('.tab-display .tab-level.active .option-selector'),spreader(source.options)).querySelectorAll('li').forEach(item => item.addEventListener('click', event => {selectedOptions.push(event.currentTarget.textContent); secondLevel(selectedOptions[0])})); 
  }
  function secondLevel(selection){
    const currentSelection = mainObj.options.find(item=> item.option == selection);
    setLoading(true);
    toggleTab(document.querySelectorAll('.tab-level'), document.querySelector('.tab-level.second-level'));
    htmlize(document.querySelector('.tab-display .tab-level.active .option-selector'),spreader(currentSelection.values)).querySelectorAll('li').forEach(item => { if(!Array.from(item.classList).includes('only-option')){ item.addEventListener('click', event => {selectedOptions.push(event.currentTarget.textContent); thirdLevel(currentSelection,selectedOptions[1])}) } });
  }
  function thirdLevel(pastElement,selection){
       const currentSelection = pastElement.values.find(item=> item.option == selection);
       setLoading(true);
        toggleTab(document.querySelectorAll('.tab-level'), document.querySelector('.tab-level.third-level'));
        htmlize(document.querySelector('.tab-display .tab-level.active .option-selector'),spreader(currentSelection.value, true));
  }
  async function readCSV() {
    try {
      const response = await fetch(
        "{{page.metafields.custom.csv_file.value.url}}"
      );
      const csvData = await response.text();

      const lines = csvData.split("\n");
      const options = [];

      for (let i = 0; i < lines.length; i++) {
        const values = lines[i].split(",");

        // Check if the values array has enough elements
        if (values.length >= 3) {
          const option = values[0].trim();
          const value1 = values[1].trim();
          const value2 = values[2].trim().split(" ");

          // Find the existing option in the options array
          let optionIndex = options.findIndex((opt) => opt.option === option);

          // If the option does not exist, create a new one
          if (optionIndex === -1) {
            const newOption = {
              option: option,
              values: [],
            };
            options.push(newOption);
            optionIndex = options.length - 1;
          }

          // Create a new value object and add it to the option
          const newValue = {
            option: value1,
            value: value2,
          };
          options[optionIndex].values.push(newValue);
        }
      }

      const myOb = {
        options: options,
      };

      return myOb;
    } catch (error) {
      console.error("Error fetching/reading the CSV file:", error);
      return null;
    }
  }

  async function processCSV() {
    setLoading(true);
    const csvData = await readCSV();

    if (csvData) {
      mainObj = csvData;
      dataLoader(mainObj);
      
    } else {
      console.log("Failed to fetch/read the CSV data");
    }
  }
  processCSV();
  function dataLoader(source){
    firstLevel(source);
  }
}

  main();
  
</script>

{% schema %}
  {
    "name": "Buy Guide",
    "settings": [{
      "type": "text",
      "id": "first-section-heading",
      "label" : "First Section Heading"
    },
    {
      "type": "text",
      "id": "second-section-heading",
      "label" : "Second Section Heading"
    },
    {
      "type": "image_picker",
      "id": "second-section-image",
      "label" : "Second Section Instruction Image"
    },
    {
      "type": "text",
      "id": "third-section-heading",
      "label" : "Third Section Heading"
    }],
    "tag": "section",
    "class": "buying-guide",
    "presets": [{
      "name": "Buying Guide"
    }]
  }
{% endschema %}

{% stylesheet %}
{% endstylesheet %}

{% javascript %}
  
   

  
{% endjavascript %}