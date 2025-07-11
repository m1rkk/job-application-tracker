export type Applicant = {
  name: string,
  surname: string,
  email: string,
  note: string|null,
  status: 'Applied' | 'Interview' | 'Rejected' | 'Offer',
  position: string
}


