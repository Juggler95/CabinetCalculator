// Coverting the values the floats
shortSide = parseFloat(shortSide);
longSide = parseFloat(longSide);

function drawerPieces() {
  // Getting the values from the input fields
  const shortSide = document.getElementById('short-side').value;
  const longSide = document.getElementById('long-side').value;

  // Saving calculation to variable for drawer pieces
  const shortSideCalc = shortSide - 0.375 - 1.25;

  document.getElementById('drawer-pieces-short-side-value').innerHTML =
    'Short Side: ' + shortSideCalc;

  document.getElementById('drawer-pieces-long-side-value').innerHTML =
    'Long Side: ' + longSide;
}

function bottomDrawer() {
  // Getting the values from the input fields
  const shortSide = document.getElementById('short-side').value;
  const longSide = document.getElementById('long-side').value;

  // Saving calculation to variable for drawer bottom
  const drawerBottomShortSideCalc = shortSide - 0.375 - 0.5;
  const drawerBottomLongSideCalc = longSide - 0.5;

  document.getElementById('drawer-bottom-short-side-value').innerHTML =
    'Short Side: ' + drawerBottomShortSideCalc;

  document.getElementById('drawer-bottom-long-side-value').innerHTML =
    'Long Side: ' + drawerBottomLongSideCalc;
}

function resetValues() {
  // Resetting the values in the input fields to blank
  document.getElementById('short-side').value = '';
  document.getElementById('long-side').value = '';

  // Resetting the values in the output fields to blank
  document.getElementById('drawer-pieces-short-side-value').innerHTML =
    'Short Side:';
  document.getElementById('drawer-pieces-long-side-value').innerHTML =
    'Long Side: ';

  document.getElementById('drawer-bottom-short-side-value').innerHTML =
    'Short Side:';
  document.getElementById('drawer-bottom-long-side-value').innerHTML =
    'Long Side: ';

  console.log('Resetting values');
}
