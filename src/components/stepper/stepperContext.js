import React, { createContext, useState } from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const StepperContext = createContext({});

function StepperProvider({ children }) {
  const router = useRouter();
  const { id } = router.query;
  const [value, setValue] = useState(0);
  const [tagLength, setTagLength] = useState(-1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const getTagsLength = (tabs) => {
    setTagLength(tabs?.length - 1);
  }
  
  useEffect(() => {
    setValue(0);
  },[])

  useEffect(() => {
    setValue(0);
  },[id])
  

  return <StepperContext.Provider value={{ value, setValue, handleChange, getTagsLength, tagLength }}>{children}</StepperContext.Provider>;
}

export { StepperProvider, StepperContext };


// const tabs = [
//   {
//     title: 'Basic',
//     fields: ['name', 'user_id', 'email', 'password', 'fein', 'office_phone', 'office_fax', 'website'],
//     component: (
//       <>
//         <NameTextBox label="Company" formik={formik} />

//         <MultiValueAutocomplete
//           fullWidth
//           name="users"
//           label="Users"
//           placeholder="Please Select Users"
//           getOptionLabel="fullname"
//           getOptionSubLabel="company_name"
//           getOptionValue="id"
//           isSubLabel={true}
//           isLabelType={true}
//           options={users || []}
//           loading={isUsersLoading}
//           value={formik.values.users}
//           onChange={(e) => formik.setFieldValue('users', e)}
//           error={formik.touched.users && formik.errors.users}
//           helperText={formik.touched.users && formik.errors.users}
//         />
//         {isEdit ? (
//           <Grid container>
//             <Grid item md={12}>
//               <CompanyCodeTextBox disabled={true} isAlphanumeric isRequired formik={formik} />
//             </Grid>
//           </Grid>
//         ) : (
//           <Grid container>
//             <Grid item md={10}>
//               <CompanyCodeTextBox isAlphanumeric isRequired formik={formik} />
//             </Grid>
//             <Grid item md={2}>
//               <GenerateCodeButton loading={loading.generateCodeLoading} onClick={() => generateCode()} />
//             </Grid>
//           </Grid>
//         )}

//         <EmailTextBox isRequired formik={formik} />

//         <Grid container>
//           <Grid item md={10}>
//             <PasswordTextBox formik={formik} />
//           </Grid>
//           <Grid item md={2}>
//             <GeneratePasswordButton loading={loading.geneartePassWordLoading} onClick={() => generatePassword()} />
//           </Grid>
//         </Grid>

//         <Textbox
//           fullWidth
//           label={translate('companies.field.fein')}
//           name="fein"
//           value={formik.values.fein}
//           onChange={formik.handleChange}
//           error={formik.touched.fein && formik.errors.fein}
//           helperText={formik.touched.fein && formik.errors.fein}
//         />

//         <PhoneInput
//           fullWidth
//           label={translate('companies.field.office_phone')}
//           name="office_phone"
//           value={formik.values.office_phone}
//           onChange={(e) => formik.setFieldValue('office_phone', e)}
//           error={formik.touched.office_phone && formik.errors.office_phone}
//           helperText={formik.touched.office_phone && formik.errors.office_phone}
//         />

//         <Textbox
//           fullWidth
//           label={translate('companies.field.office_fax')}
//           name="office_fax"
//           value={formik.values.office_fax}
//           onChange={formik.handleChange}
//           error={formik.touched.office_fax && formik.errors.office_fax}
//           helperText={formik.touched.office_fax && formik.errors.office_fax}
//         />

//         <Textbox
//           fullWidth
//           label={translate('companies.field.website')}
//           name="website"
//           value={formik.values.website}
//           onChange={formik.handleChange}
//           error={formik.touched.website && formik.errors.website}
//           helperText={formik.touched.website && formik.errors.website}
//         />
//         {/* <FileBox
//           fullWidth
//           label={translate('companies.field.logo')}
//           name="logo"
//           url="admin/upload/image"
//           accept="image/jpeg,image/png"
//           icon="upload"
//           disabled={true}
//           value={formik.values.logo || ''}
//           onChange={(e) => formik.setFieldValue('logo', e)}
//           error={formik.touched.logo && formik.errors.logo}
//           helperText={formik.touched.logo && formik.errors.logo}
//         /> */}
//         <DragDrop
//           fullWidth={true}
//           name="logo"
//           url="admin/upload/image"
//           value={formik.values.logo}
//           onChange={(e) => {
//             formik.setFieldValue('logo', e);
//           }}
//         />
//       </>
//     ),
//   },
//   {
//     title: 'Details',
//     fields: ['company_modules', 'company_status_id', 'payment_method_id'],
//     component: (
//       <>
//         <CompanyStatusSelect formik={formik} />

//         <PaymentMethodSelect formik={formik} />
//       </>
//     ),
//   },
//   {
//     title: 'Address',
//     fields: ['addresses'],
//     component: <AddressModule formik={formik} />,
//   },
// ];

{/* <ScrollableTabs isLastStep={isLastStep} tabs={tabs} formik={formik} /> */}

// const isLastStep = value === 3 - 1; //Number of tabs Length
