import ui from '../.generated/ui'

describe('All components', function() {

  ui.forEach(group => {
    const components = group.components;

    [components[2]].forEach(component => {
      const flavors = component.flavors;
      flavors.forEach(flavor => {
        const path = group.id+'/'+component.id+'/flavors/'+flavor.id+'/_default.html';

        it('takes a screenshot', client => {
          client
            .url('http://localhost:8000/'+path)
            .waitForElementVisible('body', 5000)
            .resizeWindow(800, 600)
            .saveScreenshot(client.screenshotPath(component.id+'_'+flavor.id))
            .end()
        })
      })
    })
  })
})
