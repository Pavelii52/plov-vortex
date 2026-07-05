DROP POLICY IF EXISTS "Anyone can subscribe" ON public.recipe_leads;

CREATE POLICY "Anyone can subscribe"
ON public.recipe_leads
FOR INSERT
TO anon, authenticated
WITH CHECK (
  email IS NOT NULL
  AND length(email) BETWEEN 5 AND 254
  AND email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'
  AND (name IS NULL OR length(name) <= 120)
  AND (source IS NULL OR length(source) <= 60)
);