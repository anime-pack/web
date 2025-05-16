
"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useTranslations } from "@/lib/i18n";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

interface ThemeToggleProps extends React.ComponentPropsWithoutRef<typeof Button> {}

const ThemeToggle = React.forwardRef<HTMLButtonElement, ThemeToggleProps>(
  (props, ref) => {
    const { setTheme } = useTheme();
    const { t } = useTranslations();

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            ref={ref} // Forward the ref
            variant="outline"
            size="icon"
            // Merge internal classes with props.className from TooltipTrigger
            className={cn("h-9 w-9", props.className)}
            {...props} // Spread other props (like event handlers from TooltipTrigger)
          >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">{t('header.srThemeToggle')[0]}</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setTheme("light")}>
            {t('header.themeLight')[0]}
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("dark")}>
            {t('header.themeDark')[0]}
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("system")}>
            {t('header.themeSystem')[0]}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }
);
ThemeToggle.displayName = "ThemeToggle";

export { ThemeToggle };
