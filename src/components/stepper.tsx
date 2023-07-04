import React, { useState } from "react";
import { Rating } from "@material-tailwind/react";
import CarouselComponent from "./carousel";
import Select from "react-select";

interface city {
  value: string,
  label: string,
  imageUrl: string
}
const option1 = [
  { label: "January", value: "Jan"},
  { label: "February", value: "Feb"},
  { label: "March", value: "Mar"},
  { label: "April", value: "Apr"},
  { label: "May", value: "May"},
  { label: "June", value: "Jun"},
  { label: "July", value: "July"},
  { label: "August", value: "Aug"},
  { label: "September", value: "Sept"},
  { label: "October", value: "Oct"},
  { label: "November", value: "Nov"},
  { label: "December", value: "Dec"},
];
const options:city[] = [
  { value: "Gujarat", label: "Gujarat", imageUrl : "https://tourmyindia.com/socialimg/gujarat-tourism.jpg" },
  { value: "Rajasthan", label: "Rajasthan", imageUrl: "https://heritagerajasthantourism.com/images/package1.jpg" },
  { value: "Kerala", label: "Kerala", imageUrl: "https://static.toiimg.com/photo/msid-78100845,width-96,height-65.cms" },
  { value: "Punjab", label: "Punjab", imageUrl: "https://static.toiimg.com/photo/65688151.cms" },
  { value: "Sikkim", label: "Sikkim", imageUrl: "https://www.esikkimtourism.in/wp-content/uploads/2019/05/july-last.jpg" },
  { value: "Telangana", label: "Telangana", imageUrl: "https://media.istockphoto.com/id/1215274990/photo/high-wide-angle-view-of-charminar-in-the-night.jpg?s=612x612&w=0&k=20&c=byyIjqgbslf-L191n6SJu0s35fvNoVeWsxV5rIPK7Sk=" },
  { value: "Tripura", label: "Tripura", imageUrl: "https://www.tourmyindia.com/socialimg/tripura-touris.jpg" },
  { value: "Odisha", label: "Odisha", imageUrl: "https://assets.traveltriangle.com/blog/wp-content/uploads/2016/11/Suntemple-Konark.jpg" },
  { value: "Meghalaya", label: "Meghalaya", imageUrl: "https://static.toiimg.com/photo/62429501.cms"},
  { value: "Nagaland", label: "Nagaland", imageUrl: "https://www.tourmyindia.com/blog/wp-content/uploads/2020/12/Feature-Nagaland.jpg" },
  { value: "Mizoram", label: "Mizoram", imageUrl: "https://www.holidify.com/images/bgImages/MIZORAM.jpg" },
  { value: "Himachal Pradesh", label: "Himachal Pradesh", imageUrl: "https://lp-cms-production.imgix.net/2019-06/GettyImages-149353949_high.jpg" },
  { value: "Assam", label: "Assam", imageUrl : "https://www.incredible-northeastindia.com/images/assam-head.jpg" },
  { value: "Delhi", label: "Delhi", imageUrl: "https://t3.ftcdn.net/jpg/02/63/80/98/360_F_263809891_P9jYnXF1wd1LaMsjBnBluTWJD5b9c4Pr.jpg" },
  { value: "Mumbai", label: "Mumbai", imageUrl: "https://static.toiimg.com/thumb/msid-88428704,imgsize-139696,width-900,height-1200,resizemode-6/88428704.jpg" },
];
export default function TravelQue() {
  const [active,setActive] = useState("first")
  const [selectedOption, setSelectedOption] = useState<city>();
  const [error, setError] = useState("");

  const handleSelectChange = (selectedOption:any) => {
    setSelectedOption(selectedOption);
    setError("");
  };

  const handleValidation = () => {
    if (!selectedOption) {
      setError("Please select an option");
      setActive('first')
    } else {
      setActive('second')
    }
  };
  return (
    <div>
      {(active === 'first') &&
        <div className="flex flex-row" id="mainDiv">
          <div className="basis-1/2" id="div01">
            <img src="kashmir.jpeg" alt="image" className="" />
            <div id="div" className="sm:hidden lg:border-2 2xl:flex flex-col rounded-xl p-3 relative -top-24 left-96 bg-gradient-to-r to-gray-700 from-zinc-500 text-white">
                <Rating value={4} readonly />
                <p>“I have travel for many years and I must said my trip to Japan was extraordinary thank to Rough Guides ,their agent in Japan Yasuko, took care of every detail and the follow up she did I had never seen it done before”</p>
                <p className="text-black font-semibold">Alfredo travelled to Japan</p>
            </div>
            <div className="mt-5 2xl:hidden xl:visible" id="div2">
              <div className="">
                <p className="text-2xl font-medium text-center">Why this Travel Guide?</p>
              </div>
              <div className="flex flex-wrap gap-2 mt-7">
                <div className="border-2 rounded-xl p-2 w-40 flex flex-row">
                  <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 32 32" width="32px" height="32px"><path d="M 16 4 C 9.382813 4 4 9.382813 4 16 C 4 22.617188 9.382813 28 16 28 C 22.617188 28 28 22.617188 28 16 C 28 9.382813 22.617188 4 16 4 Z M 16 6 C 21.535156 6 26 10.464844 26 16 C 26 21.535156 21.535156 26 16 26 C 10.464844 26 6 21.535156 6 16 C 6 10.464844 10.464844 6 16 6 Z M 15 8 L 15 17 L 22 17 L 22 15 L 17 15 L 17 8 Z"/></svg>
                  <p className="text-center pt-1 pl-1">Save time</p>
                </div>
                <div className="border-2 rounded-xl p-2 w-40 flex flex-row">
                  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 113.98 122.88" className="h-6" ><g><path className="st0" d="M79.21,84.71c-0.84-0.76-1.98-1.74-3.18-2.78c-2.61-2.24-5.51-4.73-6.86-6.42l-0.13,0.09 c-2.76,1.89-6.17,3.15-10.83,3.14c-4.35-0.01-7.62-1.22-10.31-3.01c-0.66-0.44-1.27-0.91-1.86-1.4c-1.33,1.74-4.59,4.51-7.49,6.97 c-1.77,1.5-3.4,2.88-4.26,3.72c-3,3.75-5.65,7.75-7.88,12.22l9.23-0.23l21.23,18.46l21.23-18.46l9.23,0.23 C85.05,92.64,82.32,88.55,79.21,84.71L79.21,84.71z M40.79,65.37c2.56,1.66,5.38,2.99,8.46,3.97c0.31-0.7,0.74-1.32,1.36-1.8 c1.86-1.44,7.31-1.3,8.99,0.09c1.41,1.17,1.43,3.85,0.39,5.25c-1.8,2.42-8.34,1.14-12.25,0.08c0.59,0.51,1.21,0.99,1.86,1.43 c2.26,1.51,5,2.53,8.62,2.53c3.92,0.01,6.79-1.05,9.12-2.64c0.43-0.3,0.85-0.61,1.26-0.95c0.13-0.22,0.33-0.4,0.58-0.5 c1.6-1.42,2.99-3.08,4.37-4.74l2.46-2.95c0.3-0.36,0.4-0.48,0.51-0.61c0.3-0.35,0.64-0.75,0.97-1.16c0.09-0.11,0.21-0.21,0.35-0.28 c0.4-1.3,0.7-2.66,0.91-4.09c0.7-4.67,0.72-8.3-1.38-12.6c-1.82-3.71-4.38-5.64-7.17-7.02c3.01,3.36,5.5,6.62,4.85,9.3 c-3.68-4.04-7.47-7.57-11.4-10.48c-8.21-4.24-13.04-9.99-15.19-16.95C36.29,33.4,34.17,47.62,38.68,63.09 c0.16,0.07,0.3,0.17,0.4,0.29L40.79,65.37L40.79,65.37z M42.86,71.17c-3.04-1.52-5.9-3.76-8.6-5.99l-4.94,0.13 c-0.68-0.78-1.25-1.68-1.73-2.69c-0.39-0.04-0.78-0.12-1.16-0.24c-4.75-1.49-8.69-12.05-7.91-17.03c0.44-2.82,1.44-3.84,3.06-4.46 c-0.08-0.23-0.12-0.47-0.12-0.73V29.53c0-4,1.2-7.93,3.15-11.49c2.13-3.91,5.17-7.4,8.49-10.04c6.78-5.41,15.56-8.09,24.29-8 c8.66,0.09,17.3,2.92,23.91,8.53c3.19,2.71,5.88,6.26,7.76,10.18c1.83,3.82,2.89,8,2.89,12.11v8.78c0,1.25-1.01,2.26-2.26,2.26 c-0.72,0-1.36-0.33-1.77-0.86c1.11,8.34,0.07,16.92-3.26,24.04h-5.63c-0.13,0.15-0.25,0.3-0.37,0.44l-0.5,0.59l-2.46,2.95 c-1.43,1.72-2.88,3.45-4.59,4.96c0.9,1.18,3.9,3.75,6.56,6.04c0.86,0.74,1.7,1.46,2.43,2.1c7.29,2.84,14.41,5.75,19.94,9.21 c4.27,2.67,6.47,4.69,8.2,7.93c2.73,5.12,4.88,10.8,5.52,17.54c0.57,6.03,0.52,5.76-5.27,5.88c-30.52,0.61-73.02-0.51-102.88,0 c-5.43,0.09-5.99,0.48-5.42-7.25c1.85-8.77,0.8-7.61,5.37-16.17c1.73-3.24,3.93-5.25,8.2-7.93c5.56-3.49,12.72-6.41,20.06-9.26 c0.9-0.8,1.99-1.73,3.14-2.71c3.2-2.72,6.87-5.83,7.28-6.75C43.76,72.15,43.3,71.67,42.86,71.17L42.86,71.17z M87.42,38.05v-7.22 c0-3.44-0.89-6.96-2.43-10.17c-1.6-3.35-3.9-6.37-6.61-8.68C72.59,7.06,64.99,4.58,57.34,4.5c-7.74-0.08-15.5,2.28-21.45,7.03 c-2.88,2.3-5.51,5.3-7.34,8.67c-1.6,2.93-2.58,6.12-2.58,9.34v9.09c2.45-11.79,7.45-20.38,15.22-25.51 c5.72-3.78,9.13-3.99,15.8-3.99c5.83,0,9.4-0.13,14.37,3.14C79.94,17.91,85.38,27.63,87.42,38.05L87.42,38.05z M49.73,104.51 l4.21-14.6l-2.06-2.26c-0.93-1.36-1.13-2.54-0.62-3.56c1.12-2.21,3.43-1.8,5.59-1.8c2.26,0,5.05-0.43,5.76,2.4 c0.24,0.95-0.06,1.94-0.72,2.96l-2.06,2.26l4.21,14.6l-7.15,5.65L49.73,104.51L49.73,104.51z"/></g></svg>
                  <p className="text-center pl-1">Support locals</p>
                </div>
                <div className="border-2 rounded-xl p-2 w-40 flex flex-row">
                  <svg fill="currentColor" viewBox="0 0 16 16" className='h-6'><path d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z"/> <path d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"/> </svg>
                  <p className="text-center pl-1">Book securely</p>
                </div>
                <div className="border-2 rounded-xl p-2 w-40 flex flex-row">
                  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" className="h-6" viewBox="0 0 122.88 94.46" ><g><path className="st0" d="M16.12,57.81c1.18-13.83,3.59-25.21,13.49-29.72c4.51,13.63,2.48,26.79-1.88,41.21 C13.95,71.23,1.47,75.67,1.47,84.48c6.65,1.81,11.38-0.71,15.35-5.96c8.88,7.71,14.54,10.06,23.47-0.45 c5.83,10.17,17.37,7.79,23.48,0.32c6.75,8.76,18.41,9.44,23.32-1.44c7.1,10.93,18.15,9.32,23.37,0.67 c3.32,4.15,5.05,6.84,10.66,7.27c-3.69-11.94-16.91-17.53-33.9-18.17c-2.58-8.69-3.73-16.65-1-24.89c6.11,2.78,7.59,9.8,8.32,18.34 l-0.01,0.01c2.4-5.92,3.88-11.32,0.51-17.43c3.21,0.34,6.24,2.25,9.45,5.19c-2.65-5.68-6.95-10-14.63-9.03 c4.28-2.87,9.35-2.38,14.24-1.24c-5.09-5.37-10.63-7.62-17.27-1.53c-0.23-3.7,1.3-6.91,3.33-9.99c-4.3,1.71-7.51,3.58-6.51,11.37 c-7.35-6.21-15.57-3.58-18.45,7.29c5.39-4.77,11.13-7.19,17.25-5.3c-10.7,4.01-13.57,10.19-9.06,18.6 c3.21-8.12,6.57-13.23,10.33-15.6c-2.05,5.17-3.82,10.9-1.77,24.15C75.35,66.8,68.3,67.6,61.11,69c-4.46-0.87-14.23-1.33-24.6-0.61 c3.33-21.5,0.47-30.78-2.86-39.17C39.76,33.06,45.2,41.34,50.4,54.5c7.31-13.62,2.66-23.64-14.69-30.14 c9.92-3.08,19.22,0.86,27.97,8.58c-4.67-17.63-18-21.88-29.91-11.82C35.39,8.5,30.19,5.47,23.22,2.69c3.28,5,5.76,10.2,5.39,16.19 C17.86,9.01,8.88,12.66,0.62,21.36c7.93-1.85,16.15-2.64,23.08,2.01C11.26,21.8,4.3,28.81,0,38.01c5.2-4.77,10.11-7.86,15.31-8.42 c-5.46,9.9-3.05,18.64,0.83,28.24L16.12,57.81L16.12,57.81z M65.51,21.46c-0.21,0.36-0.66,0.48-1.02,0.28 c-0.36-0.21-0.48-0.66-0.28-1.02l0.96-1.67c0.21-0.36,0.66-0.48,1.02-0.28c0.36,0.21,0.48,0.66,0.28,1.02L65.51,21.46L65.51,21.46 L65.51,21.46z M70.46,4.99c1.85,0,3.53,0.75,4.74,1.96c1.21,1.21,1.96,2.89,1.96,4.74c0,1.85-0.75,3.53-1.96,4.74 c-1.21,1.21-2.89,1.96-4.74,1.96c-1.85,0-3.53-0.75-4.74-1.96c-1.21-1.21-1.96-2.89-1.96-4.74c0-1.85,0.75-3.53,1.96-4.74 C66.94,5.74,68.61,4.99,70.46,4.99L70.46,4.99z M79.64,5.71C80,5.5,80.46,5.62,80.67,5.98C80.87,6.34,80.75,6.8,80.39,7l-1.67,0.96 c-0.36,0.21-0.82,0.09-1.02-0.27c-0.21-0.36-0.09-0.82,0.27-1.02L79.64,5.71L79.64,5.71z M81.41,11.1c0.41,0,0.75,0.34,0.75,0.75 c0,0.41-0.34,0.75-0.75,0.75h-1.92c-0.41,0-0.75-0.34-0.75-0.75c0-0.41,0.34-0.75,0.75-0.75H81.41L81.41,11.1z M64.48,2.52 c-0.21-0.36-0.09-0.82,0.27-1.02c0.36-0.21,0.82-0.09,1.02,0.27l0.96,1.67c0.21,0.36,0.09,0.82-0.27,1.02 c-0.36,0.21-0.82,0.09-1.02-0.27L64.48,2.52L64.48,2.52z M69.87,0.75C69.87,0.34,70.2,0,70.62,0c0.41,0,0.75,0.34,0.75,0.75v1.92 c0,0.41-0.34,0.75-0.75,0.75c-0.41,0-0.75-0.34-0.75-0.75V0.75L69.87,0.75z M75.42,1.92c0.21-0.36,0.66-0.48,1.02-0.28 c0.36,0.21,0.48,0.66,0.28,1.02l-0.96,1.67c-0.21,0.36-0.66,0.48-1.02,0.28c-0.36-0.21-0.48-0.66-0.28-1.02L75.42,1.92L75.42,1.92 L75.42,1.92z M80.24,16.65c0.36,0.21,0.48,0.66,0.28,1.02c-0.21,0.36-0.66,0.48-1.02,0.28l-1.67-0.96 c-0.36-0.21-0.48-0.66-0.28-1.02c0.21-0.36,0.66-0.48,1.02-0.28L80.24,16.65L80.24,16.65L80.24,16.65z M61.29,17.68 c-0.36,0.21-0.82,0.09-1.02-0.27c-0.21-0.36-0.09-0.82,0.27-1.02l1.67-0.96c0.36-0.21,0.82-0.09,1.02,0.27 c0.21,0.36,0.09,0.82-0.27,1.02L61.29,17.68L61.29,17.68z M59.52,12.29c-0.41,0-0.75-0.34-0.75-0.75c0-0.41,0.34-0.75,0.75-0.75 h1.92c0.41,0,0.75,0.34,0.75,0.75c0,0.41-0.34,0.75-0.75,0.75H59.52L59.52,12.29z M60.69,6.74c-0.36-0.21-0.48-0.66-0.28-1.02 c0.21-0.36,0.66-0.48,1.02-0.28l1.67,0.96c0.36,0.21,0.48,0.66,0.28,1.02c-0.21,0.36-0.66,0.48-1.02,0.28L60.69,6.74L60.69,6.74 L60.69,6.74z M76.45,20.87c0.21,0.36,0.09,0.82-0.27,1.02c-0.36,0.21-0.82,0.09-1.02-0.27l-0.96-1.67 c-0.21-0.36-0.09-0.82,0.27-1.02c0.36-0.21,0.82-0.09,1.02,0.27L76.45,20.87L76.45,20.87z M71.06,22.63c0,0.41-0.34,0.75-0.75,0.75 c-0.41,0-0.75-0.34-0.75-0.75v-1.92c0-0.41,0.34-0.75,0.75-0.75c0.41,0,0.75,0.34,0.75,0.75V22.63L71.06,22.63z M0.93,89.61 C2.43,89.95,4,90.1,5.56,90.06c2.17-0.06,4.31-0.48,6.17-1.25c2.18-0.9,4.19-2.35,5.04-4.6c0.78,2.16,2.92,3.74,5.01,4.6 c1.86,0.77,4.01,1.2,6.17,1.25c2.17,0.06,4.37-0.25,6.34-0.95c3.16-1.11,3.83-2.56,5.91-5.01h0c1.2,2.57,3.3,4.09,5.91,5.01 c1.97,0.69,4.17,1,6.34,0.95c2.17-0.06,4.31-0.48,6.17-1.25c2.09-0.86,4.23-2.45,5.01-4.6c0.85,2.25,2.88,3.7,5.04,4.6 c1.86,0.77,4.01,1.2,6.17,1.25c2.17,0.06,4.37-0.25,6.34-0.95c3.15-1.11,3.83-2.57,5.91-5.01c2.08,2.43,2.77,3.9,5.92,5.01 c1.97,0.69,4.17,1,6.34,0.95c2.17-0.06,4.31-0.48,6.17-1.25c2.17-0.9,4.19-2.34,5.04-4.6c0.78,2.15,2.92,3.73,5.01,4.6 c1.86,0.77,4.01,1.2,6.17,1.25c0.38,0.01,0.76,0.01,1.13,0v4.4c-3.12,0.08-6.28-0.45-9.02-1.58c-1.42-0.59-2.53-1.16-3.53-1.88 c-1.35,0.92-2.69,1.71-3.1,1.88c-4.78,1.98-10.85,2.11-15.72,0.39c-1.61-0.57-3.1-1.33-4.41-2.31c-1.31,0.98-2.81,1.74-4.41,2.31 c-4.88,1.72-10.95,1.58-15.73-0.39c-0.41-0.17-1.74-0.97-3.1-1.88c-1,0.72-2.11,1.3-3.53,1.88c-4.78,1.98-10.85,2.11-15.73,0.39 c-1.42-0.5-2.81-1.13-4.04-1.94c-1.64,0.8-3.53,1.5-4.77,1.94c-4.87,1.72-10.95,1.58-15.72-0.39c-1.42-0.59-2.53-1.16-3.53-1.88 c-1.35,0.92-2.69,1.71-3.1,1.88c-3.77,1.56-8.35,1.97-12.51,1.23V89.61L0.93,89.61z"/></g></svg>
                  <p className="text-center">Travel authentically</p>
                </div>
              </div>
            </div>
          </div>
          <div className="basis-1/2 m-auto" id="div02">
              <div className="">
                <h1 className="text-4xl text-center text-black"><span className="font-bold">Where</span> do you want to go?</h1>
              </div>
              <div className="mt-10 flex justify-center" id="dropDown">
                <div className="sm:w-[60vw] lg:w-[30vw] w-[80vw]">
                  <Select
                    options={options}
                    className="ml-9"
                    value={selectedOption}
                    onChange={handleSelectChange}
                    required
                  />
                  {error && <p className="text-center text-red-700 mt-1">{error}</p>}
                  <div className="mt-10 flex justify-center">
                    <button onClick={handleValidation} className="bg-blue-500 text-white w-40 h-12 rounded-lg hover:scale-105 border-2">Next</button>
                  </div>
                </div>
              </div>
          </div>
        </div>
      }
      {(active === 'second') && (selectedOption) &&
        <div className="h-[60vh] flex flex-row">
          <div className="basis-1/2">
            <img src={selectedOption.imageUrl} alt="cityImage" className="w-full h-[91vh]" />
            <p className="relative -top-20 ml-20 text-4xl font-bold text-white">{selectedOption.value}</p>
          </div>
          <div className="basis-1/2 m-auto">
            <div>
              <h1 className="text-4xl text-center mt-20 text-black"><span className="font-bold">When</span> do you want to go?</h1>
            </div>
            <div>
              <div className="mt-10">
                <p className="font-bold text-lg text-center -ml-96">Duration:</p>
                <p className="text-center">Please select the best fit. Duration can be tailored to your needs</p>
              </div>
              <div className="flex flex-wrap gap-5 justify-center mt-5">
                <div className="button">
                  <input type="radio" id="id1" className="" name="radio-button" />
                  <label className="border-2 rounded-lg hover:border-blue-500 text-center w-32 p-1" htmlFor="id1">Less than week</label>
                </div>
                <div className="button">
                  <input type="radio" id="id2" className="" name="radio-button" />
                  <label className="border-2 rounded-lg hover:border-blue-500 text-center ml-7 p-1" htmlFor="id2">Week</label>
                </div>
                <div className="button">
                  <input type="radio" id="id3" className="" name="radio-button" />
                  <label className="border-2 rounded-lg hover:border-blue-500 text-center p-1" htmlFor="id3">2 Weeks</label>
                </div>
                <div className="button">
                  <input type="radio" id="id4" className="" name="radio-button" />
                  <label className="border-2 rounded-lg hover:border-blue-500 text-center w-40 p-1" htmlFor="id4">More than 2 weeks</label>
                </div>
              </div>
            </div>
            <div className="mt-5 text-center">
              <span className="">
                Select the months you wish to travel. Dates can be changed at any time.
              </span>
              <div className="mt-10 flex flex-col items-center -ml-56" id="dropDown">
                <div className="sm:w-[50vw] lg:w-[20vw] w-[50vw]">
                  <Select
                    options={option1}
                    className="ml-9"
                  />
                </div>
                <div className="mt-5 flex flex-row">
                  <div className="pt-2 mr-1">Exact Date:</div>
                  <input type="date" className="rounded-xl" />
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-56 justify-center">
              <div className="mt-10 flex justify-center">
                <button onClick={() => setActive("first")} className="bg-blue-500 text-white w-40 h-12 rounded-lg hover:scale-105 border-2">Previous</button>
              </div>
              <div className="mt-10 flex justify-center">
                <button onClick={() => setActive("third")} className="bg-blue-500 text-white w-40 h-12 rounded-lg hover:scale-105 border-2">Next</button>
              </div>
            </div>
          </div>
        </div>
      }
      {(active === 'third') &&
        <div className="h-[60vh] mt-10 flex justify-center">
          <div className="pt-12">
            <div>
              <h1 className="text-4xl text-center mt-20 text-black"><span className="font-bold">Where</span> do you want to go?</h1>
            </div>
            <div className="mt-10 flex justify-center" id="dropDown">
              <CarouselComponent />
            </div>
            <div className="mt-10 flex justify-center">
              <button onClick={() => setActive("second")} className="bg-blue-500 text-white w-40 h-12 rounded-lg hover:scale-105 border-2">Previous</button>
            </div>
            <div className="mt-10 flex justify-center">
              <button onClick={() => setActive("")} className="bg-blue-500 text-white w-40 h-12 rounded-lg hover:scale-105 border-2">Next</button>
            </div>
          </div>
        </div>
      }
    </div>
  )
}