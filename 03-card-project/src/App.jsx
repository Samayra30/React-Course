import React from 'react'
import Card from './components/Card';
const App = () => {
 const jobListings = [
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    companyName: "Google",
    jobPost: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$65/hr",
    placeOfPosting: "Mumbai, India",
    daysAgoPosted: "2 days ago"
  },
  {
    logo: "https://logo.clearbit.com/microsoft.com",
    companyName: "Microsoft",
    jobPost: "Frontend Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$40/hr",
    placeOfPosting: "Bangalore, India",
    daysAgoPosted: "1 week ago"
  },
  {
    logo: "https://logo.clearbit.com/amazon.com",
    companyName: "Amazon",
    jobPost: "Backend Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$55/hr",
    placeOfPosting: "Hyderabad, India",
    daysAgoPosted: "3 days ago"
  },
  {
    logo: "https://logo.clearbit.com/meta.com",
    companyName: "Meta",
    jobPost: "UI/UX Designer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$60/hr",
    placeOfPosting: "Pune, India",
    daysAgoPosted: "5 days ago"
  },
  {
    logo: "https://logo.clearbit.com/netflix.com",
    companyName: "Netflix",
    jobPost: "Software Engineer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$45/hr",
    placeOfPosting: "Delhi, India",
    daysAgoPosted: "2 weeks ago"
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    companyName: "Apple",
    jobPost: "iOS Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$70/hr",
    placeOfPosting: "Chennai, India",
    daysAgoPosted: "4 days ago"
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Adobe_Corporate_logo.svg",
    companyName: "Adobe",
    jobPost: "Software Tester",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$38/hr",
    placeOfPosting: "Kolkata, India",
    daysAgoPosted: "6 days ago"
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    companyName: "IBM",
    jobPost: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$68/hr",
    placeOfPosting: "Noida, India",
    daysAgoPosted: "1 day ago"
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
    companyName: "Tesla",
    jobPost: "DevOps Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$58/hr",
    placeOfPosting: "Gurugram, India",
    daysAgoPosted: "3 weeks ago"
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
    companyName: "Spotify",
    jobPost: "Data Analyst",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$42/hr",
    placeOfPosting: "Ahmedabad, India",
    daysAgoPosted: "5 days ago"
  }
];



  return (
    <div className='parent'>
    {jobListings.map(function(elem,idx){
      return <div key={idx}>
        <Card logo={elem.logo} company={elem.companyName} post={elem.daysAgoPosted} job={elem.jobPost} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} place={elem.placeOfPosting}/>
      </div>
    })}

    </div>
  )
}

export default App
