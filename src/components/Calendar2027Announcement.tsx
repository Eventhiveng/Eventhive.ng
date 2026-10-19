"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { CALENDAR_2027_PDF } from "@/util/calendar2027";

const Calendar2027Announcement = () => {
  const [open, setOpen] = useState(false);

  const dismiss = useCallback(() => {
    setOpen(false);
  }, []);

  useEffect(() => {
    const showPopup = () => {
      window.setTimeout(() => setOpen(true), 400);
    };

    const onPreloaderComplete = () => {
      window.removeEventListener("preloaderComplete", onPreloaderComplete);
      showPopup();
    };

    if (document.documentElement.classList.contains("preloader-complete")) {
      showPopup();
    } else {
      window.addEventListener("preloaderComplete", onPreloaderComplete);
    }

    return () => {
      window.removeEventListener("preloaderComplete", onPreloaderComplete);
    };
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") dismiss();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, dismiss]);

  if (!open) {
    return null;
  }

  return (
    <div
      className="calendar-announcement-overlay"
      onClick={dismiss}
      role="presentation"
    >
      <div
        className="calendar-announcement-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="calendar-announcement-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="calendar-announcement-close"
          onClick={dismiss}
          aria-label="Close"
        >
          &times;
        </button>

        <div className="calendar-announcement-badge">2027</div>

        <Image
          src="/logo/logo.svg"
          alt="Eventhive"
          width={160}
          height={48}
          className="calendar-announcement-logo"
        />

        <h2 id="calendar-announcement-title">
          Our 2027 calendar is now out
        </h2>
        <p>
          Plan your year with Eventhive&apos;s full lineup of business events
          across Africa.
        </p>

        <div className="calendar-announcement-actions">
          <a
            href={CALENDAR_2027_PDF}
            download
            className="btn btn-pry calendar-announcement-download"
          >
            <Icon icon="solar:calendar-mark-bold" width={20} height={20} />
            Download 2027 calendar
          </a>
          <button
            type="button"
            className="calendar-announcement-later"
            onClick={dismiss}
          >
            Maybe later
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calendar2027Announcement;
