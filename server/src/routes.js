const Joi = require('joi')
const PersonModel = require("./model/person");
const personSchema = require("./validation/person");
module.exports = [
 
    {
        method: ['GET', 'POST'],
        path: '/',
        options: {
            description: 'Test Route',
            notes: 'Returns a string',
            tags: ['api'],
            handler: function (request, h) {
                console.log("goo")
                return 'I did something!';
            }
        }

    },
    {
        method: 'POST',
        path: '/h',
        handler: function (request, h) {
            console.log(request.payload)
            return `Hello `;
        },
        options: {
            description: 'payload  test',
            notes: 'Return static string',
            tags: ['api'],
            validate: {
                payload: Joi.object({
                    post: Joi.string().min(100).max(140)
                })
            }
        }

    },
    {
        method: "POST",
        path: "/person",
        options: {
            description: 'Person Entry Request',
            notes: 'Returns an array of Person',
            tags: ['api'],
            validate: {
                payload: personSchema.personValidateSchema
            },
            handler: async (request, h) => {
                try {
                    var person = new PersonModel(request.payload);
                    var result = await person.save();
                    console.log(result);
                    return h.response(result);
                } catch (error) {
                    return h.response(error).code(500);
                }
            }
        }

    },

    {
        method: "GET",
        path: "/people",
        options: {
            description: 'Get persons list',
            notes: 'Returns an array of persons',
            tags: ['api'],

            handler: async (request, replay) => {
                try {
                    var persons = await PersonModel.find().exec();
                    return replay.response(persons);
                } catch (error) {
                    return replay.response(error).code(500);
                }
            }
        }

    },

    {
        method: 'GET',
        path: "/person/{id}",
        options: {
            description: 'Get persons information',
            notes: 'Returns an array of persons',
            tags: ['api'],
            validate: {
                params: personSchema.personValidateId
            },
            handler: async (req, rep) => {
                try {
                    let person = await PersonModel.findById(req.params.id).exec();
                    return rep.response(person);
                } catch (error) {
                    return rep.response(error).code(500);
                }
            }
        }

    },
    {
        method: 'DELETE',
        path: "/person/{id}",
        options: {
            description: 'delete a person',
            notes: 'Returns an array of persons',
            tags: ['api'],
            validate: {
                params: personSchema.personValidateId
            },
            handler: async (req, rep) => {
                try {
                    let result = await PersonModel.findByIdAndDelete(req.params.id);
                    return rep.response(result);

                } catch (error) {
                    return rep.response(error).code(500);
                }
            }
        }

    }


];