import yup from 'yup';

const debug = require('rjanko/lib/core/logging/debug')(__filename);

// TODO move this to Rjanko core
yup.addMethod(yup.mixed, 'label', function(l) {
  this.label = () => l;
  return this;
});

// TODO move this to Rjanko core
yup.addMethod(yup.mixed, 'isModel', function(modelName) {
  this.isModel = () => true;
  this.modelName = () => modelName;
  return this;
});

const Track = yup.object({
  _id: yup.string().required(),
  name: yup.string().required('Track name is required'),
  album: yup.string().required('Album name is required')
}).isModel('Track', true);

export default {Track};
