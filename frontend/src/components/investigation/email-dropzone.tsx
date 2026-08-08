"use client";

import { useState } from "react";
import { FileUp, LoaderCircle, XCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface EmailDropzoneProps {
  onFileLoaded: (file: File, content: string) => void;
  onError: (message: string) => void;
  selectedFileName?: string;
  selectedFileType?: string;
  selectedFileSize?: number;
  onClear?: () => void;
}

export function EmailDropzone({
  onFileLoaded,
  onError,
  selectedFileName,
  selectedFileType,
  selectedFileSize,
  onClear,
}: EmailDropzoneProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [isReading, setIsReading] = useState(false);

  function validateFile(file: File) {
    const allowedTypes = [".eml", ".txt"];
    const extension = `.${file.name.split(".").pop()?.toLowerCase() ?? ""}`;

    if (!allowedTypes.includes(extension)) {
      onError("Unsupported file type. Please select a .eml or .txt file.");
      return false;
    }

    if (file.size > 2 * 1024 * 1024) {
      onError("The file is too large. Please choose a file smaller than 2 MB.");
      return false;
    }

    return true;
  }

  async function readFile(file: File) {
    if (!validateFile(file)) {
      return;
    }

    setIsReading(true);
    try {
      const content = await file.text();
      if (!content.trim()) {
        onError("The selected file is empty.");
        return;
      }
      onFileLoaded(file, content);
    } catch {
      onError("The file could not be read. Please try again.");
    } finally {
      setIsReading(false);
    }
  }

  return (
    <Card className="border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl sm:p-6">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--muted)]">Upload Email</p>
          <h2 className="mt-2 text-xl font-semibold text-foreground">Drag and drop an email sample</h2>
        </div>
        {selectedFileName ? (
          <Button variant="ghost" className="gap-2" onClick={onClear}>
            <XCircle className="h-4 w-4" />
            Remove
          </Button>
        ) : null}
      </div>

      <label
        className={cn(
          "mt-5 flex cursor-pointer flex-col items-center justify-center rounded-[1.25rem] border border-dashed border-[color:var(--accent)]/25 bg-[rgba(124,147,255,0.05)] p-8 text-center transition",
          isDragging && "border-[color:var(--accent)]/60 bg-[rgba(124,147,255,0.12)]",
        )}
        onDragOver={(event) => {
          event.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={(event) => {
          event.preventDefault();
          setIsDragging(false);
          const droppedFile = event.dataTransfer.files?.[0];
          if (droppedFile) {
            void readFile(droppedFile);
          }
        }}
      >
        <input
          type="file"
          accept=".eml,.txt"
          className="hidden"
          onChange={(event) => {
            const selectedFile = event.target.files?.[0];
            if (selectedFile) {
              void readFile(selectedFile);
            }
          }}
        />
        {isReading ? (
          <div className="flex flex-col items-center gap-3">
            <LoaderCircle className="h-6 w-6 animate-spin text-[color:var(--accent)]" />
            <p className="text-sm text-[color:var(--muted)]">Reading the email content…</p>
          </div>
        ) : (
          <>
            <div className="rounded-full border border-[color:var(--accent)]/25 bg-[color:var(--accent)]/10 p-3 text-[color:var(--accent)]">
              <FileUp className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-foreground">Drop an email file here</h3>
            <p className="mt-2 text-sm text-[color:var(--muted)]">Supports .eml and .txt files. The content stays in your browser for this demo.</p>
          </>
        )}
      </label>

      {selectedFileName ? (
        <div className="mt-4 rounded-[1rem] border border-white/10 bg-[rgba(7,13,32,0.7)] p-4">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="font-medium text-foreground">{selectedFileName}</p>
              <p className="mt-1 text-sm text-[color:var(--muted)]">
                {selectedFileType} • {selectedFileSize ? `${(selectedFileSize / 1024).toFixed(1)} KB` : "0 KB"}
              </p>
            </div>
            <div className="rounded-full border border-[color:var(--success)]/20 bg-[color:var(--success)]/10 px-3 py-1 text-sm text-[color:var(--success)]">
              Loaded
            </div>
          </div>
        </div>
      ) : null}
    </Card>
  );
}
