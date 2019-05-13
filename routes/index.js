const router = require('express').Router;
const path = require('path');
const apiRoutes = require('./api');

router.use(apiRoutes);

// or, if not apiRoutes, then the React app
router.use((req, res) => res.sendFile(path.join(_dirname "../client/build/index.html")));

module.exports = router;