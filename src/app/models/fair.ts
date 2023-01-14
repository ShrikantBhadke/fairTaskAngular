
export interface Ifair {
  "fairId": string,
  "fairName": string,
  "startDate": number,
  "endDate": number,
  "timezoneId": string,
  "location": Ilocation | null,
  "numberOfUsersRegistered": number,
  "numberOfSchoolsRegistered": number,
  "isCandidateRegistered": boolean,
  "bannerUrl": string,
  "showRegisteredUsersToCandidate": boolean,
  "showRegisteredUsersToSchools": boolean,
  "showRegisteredSchoolsToCandidate": boolean,
  "showRegisteredSchoolsToSchools": boolean,
  "fairStatus": string,
  "fairStartTime": string,
  "fairEndTime": string,
  "type": string,
  "candidateDescription": string,
  "schoolDescription": string
}


interface Ilocation {
  "addressOne": string,
  "addressTwo": string,
  "city": string,
  "state": string,
  "country": string,
  "zip": string
}
