"use client";

import { useEffect } from "react";

const HydrationFix = () => {
  useEffect(() => {
    // Remove browser extension attributes that cause hydration mismatches
    const removeExtensionAttributes = () => {
      const body = document.body;

      // Common browser extension attributes that cause hydration issues
      const extensionAttributes = [
        "cz-shortcut-listen",
        "data-new-gr-c-s-check-loaded",
        "data-gr-ext-installed",
        "spellcheck",
        "data-gramm",
        "data-lt-installed",
      ];

      extensionAttributes.forEach((attr) => {
        if (body.hasAttribute(attr)) {
          body.removeAttribute(attr);
        }
      });
    };

    // Run immediately and on DOM mutations
    removeExtensionAttributes();

    // Create a mutation observer to catch extension attributes added later
    const observer = new MutationObserver(removeExtensionAttributes);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: [
        "cz-shortcut-listen",
        "data-new-gr-c-s-check-loaded",
        "data-gr-ext-installed",
        "spellcheck",
        "data-gramm",
        "data-lt-installed",
      ],
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
};

export default HydrationFix;
