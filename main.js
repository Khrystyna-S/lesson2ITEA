//  HEADER

const headerContainer = document.createElement('header');
document.body.append(headerContainer);

const headerBlocks = ['imgHeader', 'itemHeader', 'iconHeader'];
headerBlocks.forEach(function (item) {
    const elem = document.createElement('div');
    elem.setAttribute('id', item);
    headerContainer.appendChild(elem);
});

const headerUl = document.createElement('ul');
document.getElementById('itemHeader').append(headerUl);

//  NAVIGTION

const itemText = ['SHOP US', 'VISIT OUR FARM', 'BLOSSOM CAFE', 'OUR STORY', 'FIND US'];
itemText.forEach(function (item) {
    const elem = document.createElement('li');
    elem.setAttribute('id', item);
    headerUl.appendChild(elem).innerHTML = item;
})

// ICON NAVIGATION

const itemIcon = ['voice', 'search', 'basket'];
itemIcon.forEach(function (item) {
    const elem = document.createElement('div');
    elem.setAttribute('id', item);
    document.getElementById('iconHeader').appendChild(elem);
})



//  CONTAINER

const mainContainer = document.createElement('div');
document.body.append(mainContainer);

const containerBlocks = ['imgBlock', 'textBlock', 'contentBlock'];
containerBlocks.forEach(function (item) {
    const elem = document.createElement('div');
    elem.setAttribute('id', item);
    mainContainer.appendChild(elem);
});

document.getElementById('contentBlock').innerHTML = `
<p>
Chudleigh’s was born on an apple farm, a place where bliss is never far away. 
Country life taught us how to work hard, 
but also how to savor life’s little rewards and take care of the kid in all of us. 
For three generations, our scrumptious snacks have been inspired by the magic of coming home. 
Ready for some bliss of your own?
</p>
<button id="blockBtn">SHOP NOW</button>
`;

