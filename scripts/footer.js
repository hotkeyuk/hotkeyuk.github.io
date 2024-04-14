<script>
    let now = new Date();
    let year = now.getFullYear();
    const docdate = new Date(document.lastModified);
    //docdate = document.lastModified;
    document.write("&copy "+ year +" Hotkey");
    //let docdatestr = docdate.toLocaleDateString(en);
    document.write( " (Last change "+ docdate.toLocaleString() + ")" );
    
</script>