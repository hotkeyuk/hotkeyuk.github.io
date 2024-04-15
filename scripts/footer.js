// Text for page footer
{
    const now = new Date();
    const docdate = new Date(document.lastModified);

    document.write(
        "&copy "+ now.getFullYear() +" Hotkey"
        + " ( " 
        + document.location.pathname 
        + " last change "+ docdate.toLocaleString() 
        + ")"
    );
}
