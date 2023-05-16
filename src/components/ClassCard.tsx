import React from "react";
import { lessonI } from "../models/lesson";
import DownloadIcon from "./DownloadIcon";

interface classCardProps {
  lesson: lessonI;
}

interface DownloadButtonProps {
  title: string;
  url: string;
  className?: string;
}

const DownloadButton = ({
  title,
  url,
  className = "",
}: DownloadButtonProps) => (
  <a href={url} target="_blank" className="">
    <button
      className={`p-2 text-white rounded-lg shadow-md bg-blue-word hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 flex items-center ${className}`}
    >
      <span className=" mr-1">
        <DownloadIcon />
      </span>
      {title}
    </button>
  </a>
);

const breakPointDesktop = "md";

export const ClassCard = ({ lesson }: classCardProps) => (
  <div
    className={`grid grid-cols-5 gap-1 shadow border rounded-lg border-gray-500 bg-gray-600 hover:bg-gray-500`}
  >
    <h5
      className={`col-span-5 text-2xl tracking-tight text-white m-2 ${breakPointDesktop}:mx-4 text-center`}
    >
      {lesson.title}
    </h5>
    <div
      className={`col-span-2 ${breakPointDesktop}:col-span-2 pl-2 flex items-center justify-center h-full py-2`}
    >
      <img
        className="object-cover rounded-lg h-full w-full md:h-auto md:w-36 lg:w-48"
        src={lesson.img}
      />
    </div>
    <div className="col-span-3 flex flex-col justify-center p-2 leading-normal">
      <div
        className={`${breakPointDesktop}:flex grid-cols-2 gap-1 items-center my-2`}
      >
        {lesson.incompletedUrl && (
          <DownloadButton title="Para contestar" url={lesson.incompletedUrl} />
        )}
        {lesson.completedUrl && (
          <DownloadButton
            title="Contestada"
            url={lesson.completedUrl}
            className={`${breakPointDesktop}:mt-0 mt-2`}
          />
        )}
      </div>
      {lesson.videos.length > 0 && (
        <>
          <h3>Vídeos de la clase:</h3>
          {lesson.videos.map((video, index) => (
            <a
              href={video}
              target="_blank"
              key={index}
              className="text-yellow-500 py-1 font-bold flex items-center"
            >
              <span className="underline">Clase #{index + 1}</span>
              <span className="material-icons ml-1">open_in_new</span>
            </a>
          ))}
        </>
      )}
      {lesson?.externalDocuments?.length && (
        <>
          <h3 className="text-white pb-2">Documentos adicionales:</h3>
          {lesson?.externalDocuments?.map((doc) => (
            <DownloadButton title={doc.name} url={doc.link} />
          ))}
        </>
      )}
      {lesson.verseToMemorize && (
        <p className="font-normal text-white">
          Memorización: <br /> <span>{lesson.verseToMemorize}</span>
        </p>
      )}
    </div>
  </div>
);
