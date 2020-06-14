/*const tabs = document.querySelectorAll('[data-tab-target]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelectorAll(tab.dataset.tabTarget)
    target.classList.add('active')
  })
})*/

const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    })
    tabs.forEach(tab => {
      tab.classList.remove('active')

      var changePcol = document.querySelectorAll("[id='lol']");
     for(var i = 0; i < changePcol.length; i++)
       changePcol[i].style.color='red';
    })
    target.classList.add('active')
    tab.classList.add('active')

  })
})

/*const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')

      // change color of P elements thorugh for loop
      var elms = document.querySelectorAll("[id='lol']");
     for(var i = 0; i < elms.length; i++)
       elms[i].style.color='red';
    })

   //tabs.forEach(tab => {
    //  tab.classList.add('active')
    //})
    //tab.classList.add('active')
    target.classList.add('active')
  })
})*/
