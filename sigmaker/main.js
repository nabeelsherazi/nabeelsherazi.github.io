$(document).ready(function(){
    $("input[type='submit']").click(function(e){
        e.preventDefault();
        var name = $("input[name='name']").val();
        var title = $("input[name='title']").val();
        var phone = $("input[name='phone']").val();
        var email = $("input[name='email']").val();
        var sig = `
        <br>
        <br>
        <table cellpadding="0" cellspacing="0" border="0" style="background: none; border-width: 0px; border: 0px; margin: 0; padding: 0;">\n
            <tr>
                <td valign="top" style="padding-top: 0; padding-bottom: 0; padding-left: 0; padding-right: 24px; border-top: 0; border-bottom: 0: border-left: 0; border-right: 0">
                    <img id="preview-image-url" src="https://cdn2.hubspot.net/hubfs/341779/img/cobalt_clean_-5x.png">
                </td>
                <td style="padding-top: 0; padding-bottom: 0; padding-left: 12px; padding-right: 0;">
                    <table cellpadding="0" cellspacing="0" border="0" style="background: none; border-width: 0px; border: 0px; margin: 0; padding: 0;">
                        <tr>
                            <td colspan="2" style="padding-bottom: 5px; color: #3943B7; font-size: 18px; font-family: Montserrat, sans-serif;">${name}</td></tr>
                            <tr>
                                <td colspan="2" style="color: #333333; font-size: 14px; font-family: Montserrat, sans-serif;">${title}</td>
                            </tr>
                            <tr>
                                <td colspan="2" style="color: #333333; font-size: 14px; font-family: Montserrat, sans-serif;"><strong>HackBeanpot, Inc.</strong></td>
                            </tr>
                            <tr>
                                <td width="20" valign="top" style="vertical-align: top; width: 20px; color: #3943B7; font-size: 14px; font-family: Montserrat, sans-serif;">m:</td>
                                <td style="color: #333333; text-decoration: none; font-size: 14px; font-family: Montserrat, sans-serif;">${phone}</td>
                            </tr>
                            <tr>
                                <td width="20" valign="top" style="vertical-align: top; width: 20px; color: #3943B7; font-size: 14px; font-family: Montserrat, sans-serif;">w:</td>
                                <td valign="top" style="vertical-align: top; color: #333333; font-size: 14px; font-family: Montserrat, sans-serif;"><a href="http://hackbeanpot.com" style=" color: #1da1db; text-decoration: none; font-weight: normal; font-size: 14px;">www.hackbeanpot.com</td>
                            </tr>
                            <tr>
                                <td width="20" valign="top" style="vertical-align: top; width: 20px; color: #3943B7; font-size: 14px; font-family: Montserrat, sans-serif;">e:</td>
                                <td style="color: #333333; font-size: 14px; font-family: Montserrat, sans-serif;"><a href="mailto:${email}@hackbeanpot.com" style="color: #1da1db; text-decoration: none; font-weight: normal; font-size: 14px;">${email}@hackbeanpot.com</a></td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        `;
        console.log(sig);
        $("#output").html(sig);
        var name = $("input[name='name']").val("");
        var title = $("input[name='title']").val("");
        var phone = $("input[name='phone']").val("");
        var email = $("input[name='email']").val("");
    })
});
