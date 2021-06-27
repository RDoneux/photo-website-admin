import { useEffect, useState } from 'react';
import { useFilePicker } from 'use-file-picker'

export function UseFileSelector(): () => void {
    const [openFileSelector, { filesContent, errors, loading }] = useFilePicker({
        multiple: true,
        // accept: '.ics,.pdf',
        accept: ['.png', '.jpg'],
    })


    return openFileSelector;
}