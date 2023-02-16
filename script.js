//your code here
// get all the image elements
const images = document.querySelectorAll('.image');

// store the dragged element
let draggedElement = null;

// add event listeners for the drag events
images.forEach(image => {
  image.addEventListener('dragstart', handleDragStart);
  image.addEventListener('dragover', handleDragOver);
  image.addEventListener('drop', handleDrop);
});

function handleDragStart(event) {
  // set the opacity of the dragged element
  this.style.opacity = "0.4";
  // store the dragged element
  draggedElement = this;
  // set the dataTransfer object
  event.dataTransfer.setData('text/plain', event.target.id);
}

function handleDragOver(event) {
  event.preventDefault();
  // set the dropEffect to move
  event.dataTransfer.dropEffect = 'move';
}

function handleDrop(event) {
  event.preventDefault();
  // get the ID of the dropped element
  const droppedElementId = event.dataTransfer.getData('text/plain');
  // get the dropped element
  const droppedElement = document.getElementById(droppedElementId);
  // swap the positions of the dragged and dropped elements
  const parent = this.parentNode;
  const sibling = this.nextSibling === draggedElement ? draggedElement.nextSibling : this.nextSibling;
  parent.insertBefore(draggedElement, this);
  parent.insertBefore(droppedElement, sibling);
  // reset the opacity of the dragged element
  draggedElement.style.opacity = "1";
}
