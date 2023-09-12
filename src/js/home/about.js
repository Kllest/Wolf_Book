export default () => {
    const container = document.createElement('div');
    const tamplete = `<h2>Lorem, ipsum dolor sit amet
     consectetur adipisicing elit. Illo asperiores consequatur voluptatum nobis voluptates! Enim ipsam illum ut consequatur, fugit qui repellat minus praesentium 
    cupiditate culpa nemo rem
     dicta odit!</h2>`;

    container.innerHTML = tamplete;

    return container;
}