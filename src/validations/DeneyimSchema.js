import * as Yup from 'yup'

export const DeneyimSchema = Yup.object().shape({
  sirket_adi: Yup.string()
    .min(3, 'Şirket ismi 3 karakterden kısa olamaz!')
    .required('Şirket ismi girmek zorunludur!'),
})
