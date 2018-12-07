import Component from '@ember/component';

export default Component.extend( {
  tagName: 'button',
  buttonText: 'Submit',

  click(){

    this.set('buttonText', 'Submitting...');
    this.onClick().then(() => {
      this.set('buttonText', 'Submit');
    })
  }


});
