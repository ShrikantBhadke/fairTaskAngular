import { Component, OnInit } from '@angular/core';
import { faItalic } from '@fortawesome/free-solid-svg-icons';
import { Ifair } from 'src/app/models/fair';

@Component({
  selector: 'app-fairs',
  templateUrl: './fairs.component.html',
  styleUrls: ['./fairs.component.scss']
})
export class FairsComponent implements OnInit {

  fairArray: Ifair[] = [
    {
      "fairId": "62f63b4caa0bf10009d0d86a",
      "fairName": "ISS Washington DC Fair",
      "startDate": 1675922400,
      "endDate": 1676181600,
      "timezoneId": "Eastern Standard Time",
      "location": {
        "addressOne": "Grand Hyatt Washington",
        "addressTwo": "1000 H Street NW",
        "city": "Washington D.C.",
        "state": "Washington D.C.",
        "country": "United States",
        "zip": "20001"
      },
      "numberOfUsersRegistered": 0,
      "numberOfSchoolsRegistered": 39,
      "isCandidateRegistered": false,
      "bannerUrl": "https://prod-downloads.issapi.info/fairs/62f63b4caa0bf10009d0d86a/candidateBanner/f5d17ff0-60f6-43af-a0ca-ba74518d21b5.png",
      "showRegisteredUsersToCandidate": false,
      "showRegisteredUsersToSchools": false,
      "showRegisteredSchoolsToCandidate": true,
      "showRegisteredSchoolsToSchools": false,
      "fairStatus": "published",
      "fairStartTime": "8:00 AM",
      "fairEndTime": "12:00 PM",
      "type": "InPerson",
      "candidateDescription": "<p class=\"xparagraph\"><span class=\"xnormaltextrun\">We are excited to welcome you to Washington DC as we&#10;return to our annual Fair following the AAIE conference. To help launch or&#10;further your international education career, join us to meet international school&#10;leaders, follow school presentations and workshops and receive support on&#10;making recruitment easier for you. This conference draws hundreds of candidates&#10;and recruiters alike, from all over the globe. Come join us and let Washington&#10;DC work its magic for you!</span><span class=\"xeop\">&#160;</span></p><p class=\"paragraph\"><span class=\"normaltextrun\"><b><u><br></u></b></span></p><p class=\"paragraph\"><span class=\"normaltextrun\"><b><u>WASHINGTON DC FAIR SCHEDULE</u></b></span><span class=\"eop\">&#160;</span><span></span></p><p class=\"paragraph\"><span class=\"eop\">&#160;</span><span></span></p><p class=\"paragraph\"><span class=\"normaltextrun\"><b>February 9th</b></span><span></span></p><p class=\"paragraph\"><span class=\"normaltextrun\">8AM-6PM: ISS Event Check-in&#8239;</span><span class=\"eop\">&#160;</span><span></span></p><p class=\"paragraph\"><span class=\"normaltextrun\">1-5PM: School &amp; Candidate Pre-conference Workshops&#8239;</span><span></span></p><p class=\"paragraph\"><span class=\"normaltextrun\">5:30-7:30PM: School Recruiter Welcome Reception&#8239;&#8239;</span><span class=\"eop\">&#160;</span><span></span></p><p class=\"paragraph\"><span class=\"eop\">&#160;</span><span></span></p><p class=\"paragraph\"><span class=\"normaltextrun\"><b>February 10<sup>th</sup></b></span><span></span></p><p class=\"paragraph\"><span class=\"normaltextrun\">8AM-6:30PM: ISS Event Check-in</span><span class=\"eop\">&#160;</span><span></span></p><p class=\"paragraph\"><span class=\"normaltextrun\">9-10AM: Candidate Welcome Session #1</span><span class=\"eop\">&#160;</span><span></span></p><p class=\"paragraph\"><span class=\"normaltextrun\">10:30AM-4:30PM: School Presentations</span><span class=\"eop\">&#160;</span><span></span></p><p class=\"paragraph\"><span class=\"normaltextrun\">5-7PM: Interview Sign-ups</span><span class=\"eop\">&#160;</span><span></span></p><p class=\"paragraph\"><span>&#160;</span></p><p class=\"paragraph\"><span class=\"normaltextrun\"><b>February 11<sup>th</sup></b></span><span class=\"normaltextrun\"><span>&#8239;</span></span><span class=\"eop\"><span>&#160;</span></span><span></span></p><p class=\"paragraph\"><span class=\"normaltextrun\">8AM-6PM: ISS School and Candidate Office Open</span><span class=\"eop\">&#160;</span><span></span></p><p class=\"paragraph\"><span class=\"normaltextrun\">8AM-5PM: Interview Day #1&#8239;&#8239;</span><span class=\"eop\">&#160;</span><span></span></p><p class=\"paragraph\"><span class=\"normaltextrun\">9-10AM: Candidate Welcome Session #2&#8239;</span><span class=\"eop\">&#160;</span><span></span></p><p class=\"paragraph\"><span class=\"normaltextrun\">5-7PM: School &amp; Candidate Networking Reception&#8239;&#8239;</span><span class=\"eop\">&#160;</span><span></span></p><p class=\"paragraph\"><span class=\"eop\">&#160;</span><span></span></p><p class=\"paragraph\"><span class=\"normaltextrun\"><b>February 12<sup>th</sup> </b></span><span class=\"eop\">&#160;</span><span></span></p><p class=\"paragraph\"><span class=\"normaltextrun\">8AM-12PM: ISS School and Candidate Office Open&#8239;</span><span class=\"eop\">&#160;</span></p><p class=\"paragraph\"><span>8AM-12PM: </span><span class=\"normaltextrun\">Interview Day #2&#8239;</span><span class=\"eop\">&#160;</span></p>",
      "schoolDescription": "<p class=\"xparagraph\"><span class=\"xnormaltextrun\">We are excited to welcome you to Washington DC as we&#10;return to our annual Fair following the AAIE conference. To help launch or&#10;further your international education career, join us to meet international school&#10;leaders, follow school presentations and workshops and receive support on&#10;making recruitment easier for you. This conference draws hundreds of candidates&#10;and recruiters alike, from all over the globe. Come join us and let Washington&#10;DC work its magic for you!</span><span class=\"xeop\">&#160;</span></p><p class=\"paragraph\"><span class=\"normaltextrun\"><span><u><br></u></span></span></p><p class=\"paragraph\"><span class=\"normaltextrun\"><span><u>WASHINGTON DC FAIR SCHEDULE</u></span></span><span class=\"eop\">&#160;</span><span></span></p><p class=\"paragraph\"><span class=\"eop\">&#160;</span><span></span></p><p class=\"paragraph\"><span class=\"normaltextrun\"><span>February 9th</span></span><span></span></p><p class=\"paragraph\"><span class=\"normaltextrun\">8AM-6PM: ISS Event Check-in&#8239;</span><span class=\"eop\">&#160;</span><span></span></p><p class=\"paragraph\"><span class=\"normaltextrun\">1-5PM: School &amp; Candidate Pre-conference Workshops&#8239;</span><span></span></p><p class=\"paragraph\"><span class=\"normaltextrun\">5:30-7:30PM: School Recruiter Welcome Reception&#8239;&#8239;</span><span class=\"eop\">&#160;</span><span></span></p><p class=\"paragraph\"><span class=\"eop\">&#160;</span><span></span></p><p class=\"paragraph\"><span class=\"normaltextrun\"><span>February 10<span>th</span></span></span><span></span></p><p class=\"paragraph\"><span class=\"normaltextrun\">8AM-6:30PM: ISS Event Check-in</span><span class=\"eop\">&#160;</span><span></span></p><p class=\"paragraph\"><span class=\"normaltextrun\">9-10AM: Candidate Welcome Session #1</span><span class=\"eop\">&#160;</span><span></span></p><p class=\"paragraph\"><span class=\"normaltextrun\">10:30AM-4:30PM: School Presentations</span><span class=\"eop\">&#160;</span><span></span></p><p class=\"paragraph\"><span class=\"normaltextrun\">5-7PM: Interview Sign-ups</span><span class=\"eop\">&#160;</span><span></span></p><p class=\"paragraph\"><span>&#160;</span></p><p class=\"paragraph\"><span class=\"normaltextrun\"><span>February 11<span>th</span></span></span><span class=\"normaltextrun\"><span>&#8239;</span></span><span class=\"eop\"><span>&#160;</span></span><span></span></p><p class=\"paragraph\"><span class=\"normaltextrun\">8AM-6PM: ISS School and Candidate Office Open</span><span class=\"eop\">&#160;</span><span></span></p><p class=\"paragraph\"><span class=\"normaltextrun\">8AM-5PM: Interview Day #1&#8239;&#8239;</span><span class=\"eop\">&#160;</span><span></span></p><p class=\"paragraph\"><span class=\"normaltextrun\">9-10AM: Candidate Welcome Session #2&#8239;</span><span class=\"eop\">&#160;</span><span></span></p><p class=\"paragraph\"><span class=\"normaltextrun\">5-7PM: School &amp; Candidate Networking Reception&#8239;&#8239;</span><span class=\"eop\">&#160;</span><span></span></p><p class=\"paragraph\"><span class=\"eop\">&#160;</span><span></span></p><p class=\"paragraph\"><span class=\"normaltextrun\"><span>February 12<span>th</span> </span></span><span class=\"eop\">&#160;</span><span></span></p><p class=\"paragraph\"><span class=\"normaltextrun\">8AM-12PM: ISS School and Candidate Office Open&#8239;</span><span class=\"eop\">&#160;</span></p><p class=\"xparagraph\"><span class=\"xeop\"></span></p><p class=\"paragraph\"><span>8AM-12PM: </span><span class=\"normaltextrun\">Interview Day #2&#8239;</span><span class=\"eop\">&#160;</span></p>"
    },
    {
      "fairId": "62f63b369431770009dcfbd9",
      "fairName": " ISS Atlanta Fair",
      "startDate": 1670652000,
      "endDate": 1670738400,
      "timezoneId": "Eastern Standard Time",
      "location": {
        "addressOne": "Atlanta International School",
        "addressTwo": "2890 North Fulton Drive",
        "city": "Atlanta",
        "state": "Georgia",
        "country": "United States",
        "zip": "30305"
      },
      "numberOfUsersRegistered": 0,
      "numberOfSchoolsRegistered": 32,
      "isCandidateRegistered": false,
      "bannerUrl": "https://prod-downloads.issapi.info/fairs/62f63b369431770009dcfbd9/candidateBanner/b93eadf7-25e8-4b33-b4f8-efcf148e2e1c.png",
      "showRegisteredUsersToCandidate": false,
      "showRegisteredUsersToSchools": false,
      "showRegisteredSchoolsToCandidate": true,
      "showRegisteredSchoolsToSchools": false,
      "fairStatus": "published",
      "fairStartTime": "4:00 PM",
      "fairEndTime": "6:00 PM",
      "type": "InPerson",
      "candidateDescription": "<p class=\"xmsonormal\"><span class=\"xeop\"><span>Join&#10;us in charming Atlanta for our kick-off of the ISS in-person fairs. </span></span><span class=\"xnormaltextrun\"><span>Rich with&#10;schools from the Americas, this fair also draws recruiters from as far away as&#10;Asia and the Middle East, and everywhere in between! Due to our partnership&#10;with AMISA, ISS candidates can attend two recruiting events, rather than just&#10;one!</span></span><span class=\"xeop\"><span>&#160;</span></span></p><p class=\"paragraph\"><span class=\"normaltextrun\"><b><u><br></u></b></span></p><p class=\"paragraph\"><span class=\"normaltextrun\"><b><u>ATLANTA FAIR SCHEDULE</u></b></span></p><p class=\"paragraph\"><span class=\"eop\">&#160;</span><span></span></p><p class=\"paragraph\"><span class=\"normaltextrun\"><b>December 9-10<sup>th</sup> </b></span><span></span></p><p class=\"paragraph\"><span class=\"normaltextrun\">AMISA (American International Schools in the Americas) Recruiting Event&#8239;</span><span class=\"eop\">&#160;</span><span></span></p><p class=\"paragraph\"><span>&#160;</span></p><p class=\"paragraph\"><span class=\"normaltextrun\"><b>December 10<sup>th</sup></b></span><span></span></p><p class=\"paragraph\"><span class=\"normaltextrun\">4-6PM: ISS Event Check-in&#8239;</span><span class=\"eop\">&#160;</span><span></span></p><p class=\"paragraph\"><span class=\"normaltextrun\">6-8PM: ISS Welcome, Networking &amp; Interview Sign-ups&#8239;&#8239;</span><span class=\"eop\">&#160;</span><span></span></p><p class=\"paragraph\"><span class=\"eop\">&#160;</span><span></span></p><p class=\"paragraph\"><span class=\"normaltextrun\"><b>December 11<sup>th</sup> </b></span></p><p class=\"paragraph\"><span>8AM-6PM: </span><span class=\"normaltextrun\">Interview Day&#8239;</span><span class=\"eop\">&#160;</span></p><p class=\"paragraph\"><span>9AM-11AM: </span><span class=\"normaltextrun\">Coffee &amp; Chat Networking&#160;</span><span class=\"eop\">Hours</span></p>",
      "schoolDescription": "<p class=\"xmsonormal\"><span class=\"xeop\"><span>Join&#10;us in charming Atlanta for our kick-off of the ISS in-person fairs. </span></span><span class=\"xnormaltextrun\"><span>Rich with&#10;schools from the Americas, this fair also draws recruiters from as far away as&#10;Asia and the Middle East, and everywhere in between! Due to our partnership&#10;with AMISA, ISS candidates can attend two recruiting events, rather than just&#10;one!</span></span><span class=\"xeop\"><span>&#160;</span></span></p><p class=\"paragraph\"><span class=\"normaltextrun\"><span><u><br></u></span></span></p><p class=\"paragraph\"><span class=\"normaltextrun\"><span><u>ATLANTA FAIR SCHEDULE</u></span></span></p><p class=\"paragraph\"><span>&#160;</span></p><p class=\"paragraph\"><span class=\"normaltextrun\"><span>December 10<span>th</span></span></span><span></span></p><p class=\"paragraph\"><span class=\"normaltextrun\">4-6PM: ISS Event Check-in&#8239;</span><span class=\"eop\">&#160;</span><span></span></p><p class=\"paragraph\"><span class=\"normaltextrun\">6-8PM: ISS Welcome, Networking &amp; Interview Sign-ups&#8239;&#8239;</span><span class=\"eop\">&#160;</span><span></span></p><p class=\"paragraph\"><span class=\"eop\">&#160;</span><span></span></p><p class=\"paragraph\"><span class=\"normaltextrun\"><span>December 11<span>th</span> </span></span></p><p class=\"paragraph\"><span>8AM-6PM: </span><span class=\"normaltextrun\">Interview Day&#8239;</span><span class=\"eop\">&#160;</span></p><p class=\"paragraph\"><span>9AM-11AM: </span><span class=\"normaltextrun\">Coffee &amp; Chat Networking&#160;</span><span class=\"eop\">Hours</span></p>"
    },
    {
      "fairId": "62f10a2f4936110009fa61cd",
      "fairName": "ISS iFair®  (Central European Time)",
      "startDate": 1670050800,
      "endDate": 1670050800,
      "timezoneId": "Eastern Standard Time",
      "location": {
        "addressOne": "Grand Hyatt Washington",
        "addressTwo": "1000 H Street NW",
        "city": "Washington D.C.",
        "state": "Washington D.C.",
        "country": "United States",
        "zip": "20001"
      },
      "numberOfUsersRegistered": 0,
      "numberOfSchoolsRegistered": 46,
      "isCandidateRegistered": false,
      "bannerUrl": "https://prod-downloads.issapi.info/fairs/62f10a2f4936110009fa61cd/candidateBanner/7b402360-5c1b-4844-9b7d-48cf4afb93db.png",
      "showRegisteredUsersToCandidate": false,
      "showRegisteredUsersToSchools": false,
      "showRegisteredSchoolsToCandidate": true,
      "showRegisteredSchoolsToSchools": false,
      "fairStatus": "published",
      "fairStartTime": "3:00 AM",
      "fairEndTime": "7:00 AM",
      "type": "Virtual",
      "candidateDescription": "<p class=\"xmsonormal\"><span class=\"xnormaltextrun\"><span>The ISS iFairs&#174; make it easy for job-seeking educators and&#10;international school recruiters to meet, chat, and interview for their perfect&#10;match! Attending an iFair&#174; requires no software download or travel beyond your&#10;home. All you need is a Wi-Fi connection to join a vibrant world of&#10;international recruiters and candidates seeking to find and fill school&#10;positions.</span></span><span class=\"xeop\"><span>&#160;</span></span></p><p class=\"xmsonormal\"><span class=\"xeop\"><span><b>The ISS iFair&#174;&#8239;(Central European Time) will take place on December 3rd, 2022 from 9:00 am to 1:00 pm Central European Time (CET).&#160;</b><br></span></span></p><p class=\"xmsonormal\"><span class=\"xeop\"><b><span><span>Use&#160;</span></span><a href=\"https://dateful.com/time-zone-converter\" target=\"_blank\">this time zone converter</a><span><span>&#160;to see when the event will occur in your local time zone.</span></span></b><span><br></span></span></p><p class=\"xmsonormal\"><span class=\"xeop\"><b><i>Note: </i></b>Registration in this event is not limited to schools and candidates in the CET time zone. All active schools and candidates wishing to attend and make connections can register.&#160;<br></span></p>",
      "schoolDescription": "<p class=\"xmsonormal\"><span class=\"xnormaltextrun\"><span>The ISS iFairs&#174; make it easy for job-seeking educators and&#10;international school recruiters to meet, chat, and interview for their perfect&#10;match! Attending an iFair&#174; requires no software download or travel beyond your&#10;home. All you need is a Wi-Fi connection to join a vibrant world of&#10;international recruiters and candidates seeking to find and fill school&#10;positions.</span></span><span class=\"xeop\"><span>&#160;</span></span></p><p class=\"xmsonormal\"><span class=\"xeop\"><b><span>The ISS iFair&#174;&#8239;(Central European Time) will take place on December 3rd, 2022 from 9:00 am to 1:00 pm Central European Time (CET).&#160;</span><br></b></span></p><p class=\"xmsonormal\"><b><span class=\"xeop\"></span></b></p><p class=\"xmsonormal\"><span class=\"xeop\">Use&#160;<a href=\"https://dateful.com/time-zone-converter\" target=\"_blank\">this time zone converter</a><span>&#160;</span>to see when the event will occur in your local time zone.</span></p><p class=\"xmsonormal\"><b>When planning your school's registration, please note that our iFair platform accommodates up to two representatives per school booth.&#160; Please reach out to your dedicated Recruitment Relationship Manager if you have any questions.</b></p><p class=\"xmsonormal\"><span class=\"xeop\"><i><b>Note:</b>&#160;</i>Registration in this event is not limited to schools and candidates in the CET time zone. All active schools and candidates wishing to attend and make connections can register.&#160;<br></span></p>"
    },
    {
      "fairId": "62f109714936110009fa61cc",
      "fairName": "ISS iFair® (Eastern Standard Time) ",
      "startDate": 1667710800,
      "endDate": 1667710800,
      "timezoneId": "Eastern Standard Time",
      "location": {
        "addressOne": "Grand Hyatt Washington",
        "addressTwo": "1000 H Street NW",
        "city": "Washington D.C.",
        "state": "Washington D.C.",
        "country": "United States",
        "zip": "20001"
      },
      "numberOfUsersRegistered": 0,
      "numberOfSchoolsRegistered": 39,
      "isCandidateRegistered": false,
      "bannerUrl": "https://prod-downloads.issapi.info/fairs/62f109714936110009fa61cc/candidateBanner/20143c65-9a21-44d2-89b8-ebc8384cc05b.png",
      "showRegisteredUsersToCandidate": false,
      "showRegisteredUsersToSchools": false,
      "showRegisteredSchoolsToCandidate": true,
      "showRegisteredSchoolsToSchools": false,
      "fairStatus": "published",
      "fairStartTime": "9:00 AM",
      "fairEndTime": "1:00 PM",
      "type": "Virtual",
      "candidateDescription": "<p class=\"xmsonormal\"><span class=\"xnormaltextrun\"><span>The ISS iFairs&#174; make it easy for job-seeking educators and&#10;international school recruiters to meet, chat, and interview for their perfect&#10;match! Attending an iFair&#174; requires no software download or travel beyond your&#10;home. All you need is a Wi-Fi connection to join a vibrant world of&#10;international recruiters and candidates seeking to find and fill school&#10;positions.</span></span><span class=\"xeop\"><span>&#160;</span></span></p><p class=\"xmsonormal\"><span class=\"xeop\"><span><b>The ISS iFair&#174;&#8239;(Eastern Standard Time) will take place on November 6th, 2022 from 9:00 am to 1:00 pm Eastern Standard Time (EST).&#160;</b><br></span></span></p><p class=\"xmsonormal\"><span class=\"xeop\"><b><span><span>Use&#160;</span></span><a href=\"https://dateful.com/time-zone-converter\" target=\"_blank\">this time zone converter</a><span><span>&#160;to see when the event will occur in your local time zone.</span></span></b><span><br></span></span></p><p class=\"xmsonormal\"><span class=\"xeop\"><span><i><b>Note: </b></i>Registration in this event is not limited to schools and candidates in the EST time zone. All active schools and candidates wishing to attend and make connections can register.&#160;<br></span></span></p>",
      "schoolDescription": "<p class=\"xmsonormal\"><span class=\"xnormaltextrun\"><span>The ISS iFairs&#174; make it easy for job-seeking educators and&#10;international school recruiters to meet, chat, and interview for their perfect&#10;match! Attending an iFair&#174; requires no software download or travel beyond your&#10;home. All you need is a Wi-Fi connection to join a vibrant world of&#10;international recruiters and candidates seeking to find and fill school&#10;positions.</span></span><span class=\"xeop\"><span>&#160;</span></span></p><p class=\"xmsonormal\"><span class=\"xeop\"><b>The ISS iFair&#174;&#8239;(Eastern Standard Time) will take place on November 6th, 2022 from 9:00 am to 1:00 pm Eastern Standard Time (EST).</b>&#160;<br></span></p><p class=\"xmsonormal\"><span class=\"xeop\">Use&#160;<a href=\"https://dateful.com/time-zone-converter\" target=\"_blank\"><b>this time zone converter</b></a>&#160;to see when the event will occur in your local time zone.<span><br></span></span></p><p class=\"xmsonormal\"><span class=\"xeop\"><span><b>When planning your school's registration, please note that our iFair platform accommodates&#160;up to two representatives per school booth.&#160; Please reach out to your dedicated ISS Recruitment Relationship Manager if you have any questions.</b><br></span></span></p><p class=\"xmsonormal\"><span class=\"xeop\"><i><span><b>Note:&#160;</b></span></i>Registration in this event is not limited to schools and candidates in the EST time zone. All active schools and candidates wishing to attend and make connections can register.&#160;<span><br></span></span></p>"
    },
    {
      "fairId": "62f10723d257fa0009cb337c",
      "fairName": "ISS iFair® (China Standard Time) ",
      "startDate": 1667538000,
      "endDate": 1667624400,
      "timezoneId": "Eastern Standard Time",
      "location": {
        "addressOne": "Grand Hyatt Washington",
        "addressTwo": "1000 H Street NW",
        "city": "Washington D.C.",
        "state": "Washington D.C.",
        "country": "United States",
        "zip": "20001"
      },
      "numberOfUsersRegistered": 0,
      "numberOfSchoolsRegistered": 43,
      "isCandidateRegistered": false,
      "bannerUrl": "https://prod-downloads.issapi.info/fairs/62f10723d257fa0009cb337c/candidateBanner/d56332cd-0c04-4fdc-adca-10f3b9e62b73.png",
      "showRegisteredUsersToCandidate": false,
      "showRegisteredUsersToSchools": false,
      "showRegisteredSchoolsToCandidate": true,
      "showRegisteredSchoolsToSchools": false,
      "fairStatus": "published",
      "fairStartTime": "9:00 PM",
      "fairEndTime": "1:00 AM",
      "type": "Virtual",
      "candidateDescription": "<span class=\"xnormaltextrun\"><span>The ISS iFairs&#174; make&#10;it easy for job-seeking educators and international school recruiters to meet,&#10;chat, and interview for their perfect match! Attending an iFair&#174; requires no&#10;software download or travel beyond your home. All you need is a Wi-Fi&#10;connection to join a vibrant world of international recruiters and candidates&#10;seeking to find and fill school positions.</span></span><span class=\"xeop\"><span>&#160;</span></span><div><br></div><div><b>The ISS iFair&#174;&#8239;(China Standard Time) will take place on November 5th, 2022 from 9:00 am to 1:00 pm China Standard Time (CST).&#160;</b><br></div><div><br></div><div><div><span class=\"xeop\"><span><b>Use&#160;</b></span><a href=\"https://dateful.com/time-zone-converter\" target=\"_blank\">this time zone converter</a><span><b>&#160;to see when the event will occur in your local time zone.</b></span></span></div><div><span class=\"xeop\"><span><b><br></b></span></span></div><div><span class=\"xeop\"><i><b>Note: </b>Registration in this event is not limited to schools and candidates in the CST time zone. All active schools and candidates wishing to attend and make connections can register.&#160;</i></span></div><div><span class=\"xeop\"><span><br></span></span></div></div>",
      "schoolDescription": "<span class=\"xnormaltextrun\"><span>The ISS iFairs&#174; make&#10;it easy for job-seeking educators and international school recruiters to meet,&#10;chat, and interview for their perfect match! Attending an iFair&#174; requires no&#10;software download or travel beyond your home. All you need is a Wi-Fi&#10;connection to join a vibrant world of international recruiters and candidates&#10;seeking to find and fill school positions.</span></span><span class=\"xeop\"><span>&#160;</span></span><div><br></div><div><span><b>The ISS iFair&#174;&#8239;(China Standard Time) will take place on November 5th, 2022 from 9:00 am to 1:00 pm China Standard Time (CST).&#160;</b></span><br></div><div><span><br></span></div><div>Use&#160;<a href=\"https://dateful.com/time-zone-converter\" target=\"_blank\"><b>this time zone converter</b></a>&#160;to see when the event will occur in your local time zone.<span><br></span></div><div><br></div><div><b>When planning your school's registration, please note that our iFair platform accommodates up to two representatives per school booth.&#160; Please reach out to your dedicated ISS Recruitment Relationship Manager if you have any questions.&#160;</b></div><div><span class=\"xeop\"><span><br></span></span></div><div><span class=\"xeop\"><i><b>Note:</b>&#160;Registration in this event is not limited to schools and candidates in the CST time zone. All active schools and candidates wishing to attend and make connections can register.&#160;</i><span><br></span></span></div>"
    }
  ]
  objIdFair: any = this.fairArray[0];
  index!: number;
  selectedFair: Ifair = this.fairArray[0];

  constructor() { }

  ngOnInit(): void {
  }

  getCardIndex(eve: any) {
    console.log(eve);

    this.objIdFair = this.fairArray.find((obj) => {
      return obj.fairId == eve
    })
    // console.log(eve.fairId);
    // this.objIdFair = eve
  }
}
