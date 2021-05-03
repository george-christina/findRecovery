const MeetingController = require('../controllers/meeting.controller');

module.exports = (app) => {
    app.get('/api/meetings',MeetingController.index);
    app.post('/api/meetings',MeetingController.create);
    app.get('/api/meetings/:id',MeetingController.show);
    app.put('/api/meetings/:id',MeetingController.update);
    app.delete('/api/meetings/:id',MeetingController.destroy);
}