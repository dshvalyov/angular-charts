describe('piechart test harness', function() {
  it('should render', function() {
    browser.get('http://127.0.0.1:8000/test/piechart/harness.html');
    browser.executeScript('sliceValues.push(25)');
    browser.executeScript('sliceValues.push(75)');
  	browser.takeScreenshot().then(function(data) {
  		browser.driver.get('http://127.0.0.1:8000/test/piechart/expected/two_slices_25_75.html');
	    browser.driver.takeScreenshot().then(function(dataNext) {
	    	expect(data).toEqual(dataNext);
	    });
	  });
  });
});