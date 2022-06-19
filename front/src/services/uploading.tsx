export const uploadAttachment = async (attachments : any) => {
    /* Add files to FormData */
    const formData = new FormData();
    Object.values(attachments).forEach((file: any) => {
        formData.append('file', file);
    })

    /* Send request to our api route */
    const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData
    });

    const body = await response.json() as { status: 'ok' | 'fail', message: string };

    return body;
}