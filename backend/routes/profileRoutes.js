// routes/profileRoutes.js

const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileController');

/**
 * @swagger
 * /profiles:
 *   post:
 *     summary: Create a new profile
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               enabled:
 *                 type: boolean
 *               extensionPath:
 *                 type: string
 *               proxy:
 *                 type: object
 *                 properties:
 *                   host:
 *                     type: string
 *                   port:
 *                     type: integer
 *                   username:
 *                     type: string
 *                   password:
 *                     type: string
 *               services:
 *                 type: object
 *                 properties:
 *                   twitter:
 *                     type: object
 *                     properties:
 *                       username:
 *                         type: string
 *                       password:
 *                         type: string
 *                       2fa:
 *                         type: string
 *                   telegram:
 *                     type: object
 *                     properties:
 *                       username:
 *                         type: string
 *                       password:
 *                         type: string
 *                   discord:
 *                     type: object
 *                     properties:
 *                       username:
 *                         type: string
 *                       password:
 *                         type: string
 *                       2fa:
 *                         type: string
 *     responses:
 *       201:
 *         description: Profile created successfully
 */
router.post('/', profileController.createProfile);

/**
 * @swagger
 * /profiles/{id}:
 *   get:
 *     summary: Get a profile by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The profile ID
 *     responses:
 *       200:
 *         description: Profile retrieved successfully
 *       404:
 *         description: Profile not found
 */
router.get('/:id', profileController.getProfile);

/**
 * @swagger
 * /profiles/{id}:
 *   put:
 *     summary: Update a profile by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The profile ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               enabled:
 *                 type: boolean
 *               extensionPath:
 *                 type: string
 *               proxy:
 *                 type: object
 *                 properties:
 *                   host:
 *                     type: string
 *                   port:
 *                     type: integer
 *                   username:
 *                     type: string
 *                   password:
 *                     type: string
 *               services:
 *                 type: object
 *                 properties:
 *                   twitter:
 *                     type: object
 *                     properties:
 *                       username:
 *                         type: string
 *                       password:
 *                         type: string
 *                       2fa:
 *                         type: string
 *                   telegram:
 *                     type: object
 *                     properties:
 *                       username:
 *                         type: string
 *                       password:
 *                         type: string
 *                   discord:
 *                     type: object
 *                     properties:
 *                       username:
 *                         type: string
 *                       password:
 *                         type: string
 *                       2fa:
 *                         type: string
 *     responses:
 *       200:
 *         description: Profile updated successfully
 *       404:
 *         description: Profile not found
 */
router.put('/:id', profileController.updateProfile);

/**
 * @swagger
 * /profiles/{id}:
 *   delete:
 *     summary: Delete a profile by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The profile ID
 *     responses:
 *       200:
 *         description: Profile deleted successfully
 *       404:
 *         description: Profile not found
 */
router.delete('/:id', profileController.deleteProfile);

module.exports = router;
