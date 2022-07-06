import * as yup from 'yup';

export const ticketValidationSchema = yup.object().shape({
  description: yup.string().required('Required field'),
  type: yup.string().required('Required field'),
  dateNeeded: yup.string().required('Required field'),
  dateRequested: yup.string().required('Required field'),
  subject: yup.string().required('Required field'),
  location: yup.string().required('Required field'),
  createdBy:yup.string().required('Required field'),
  requestedBy:yup.string().required('Required field'),
  serviceDepartment:yup.string().required('Required field'),
  requestingDepartment: yup.string().required('Required field'),  
});





