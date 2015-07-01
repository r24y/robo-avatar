import makeComponent from '@r24y/component-base';

const RoboAvatar = makeComponent('robo-avatar', {
  initialize() {
    const id = this.getAttribute('robo-id');
    const size = this.getAttribute('size') || 50;
    const set = this.getAttribute('set') || '';
    const bgset = this.getAttribute('bgset') || '';
    this.innerHTML = `<img src="http://robohash.org/${id}.png?size=${size}x${size}&set=${set}&bgset=${bgset}" width=${size} height=${size}>`
  }
});
