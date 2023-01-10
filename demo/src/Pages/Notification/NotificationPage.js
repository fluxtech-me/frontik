import React from "react";
import { Helmet } from "react-helmet-async";
import { toast } from "frontik/react/toast";
import { Button } from "frontik/react/Button";

const NotificationPage = () => {
  const notify = () => {
    toast("This is our first example", { autoClose: 2000, icon: "🚀" });
  };

  return (
    <>
      <Helmet>
        <title>Notification</title>
      </Helmet>
      <main>
        <Button onClick={notify}>Show toaster</Button>
      </main>
    </>
  );
};

export { NotificationPage };
