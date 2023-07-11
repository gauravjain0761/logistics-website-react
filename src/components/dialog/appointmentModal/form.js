import { TextBox } from "@/components/form";
import * as React from "react";

export const DialogForm = ({ formik }) => {
  return (
    <React.Fragment>
      <TextBox
        fullWidth
        label="Name"
        name={`name`}
        // required
        value={formik?.values?.name}
        onChange={formik.handleChange}
        error={formik.touched.name && formik.errors.name}
        helperText={formik.touched.name && formik.errors.name}
      />

      <TextBox
        fullWidth
        label="Date"
        type="date"
        name={`date`}
        // required
        InputLabelProps={{
          shrink: true,
        }}
        value={formik?.values?.date}
        onChange={formik.handleChange}
        error={formik.touched.date && formik.errors.date}
        helperText={formik.touched.date && formik.errors.date}
      />

      <TextBox
        fullWidth
        label="Mobile No."
        // required
        name={`mobile`}
        value={formik?.values?.mobile}
        onChange={formik.handleChange}
        error={formik.touched.mobile && formik.errors.mobile}
        helperText={formik.touched.mobile && formik.errors.mobile}
      />

      <TextBox
        fullWidth
        label="Email"
        name={`email`}
        value={formik?.values?.email}
        onChange={formik.handleChange}
        error={formik.touched.email && formik.errors.email}
        helperText={formik.touched.email && formik.errors.email}
      />

      <TextBox
        fullWidth
        label="Description"
        name={`description`}
        multiline={true}
        isMaxLenght={160}
        rows={3}
        value={formik?.values?.description}
        onChange={formik.handleChange}
        error={formik.touched.description && formik.errors.description}
        helperText={formik.touched.description && formik.errors.description}
      />
    </React.Fragment>
  );
};
