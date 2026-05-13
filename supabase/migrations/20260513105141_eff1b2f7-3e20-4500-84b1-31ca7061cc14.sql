CREATE TABLE public.recipe_leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  name TEXT,
  source TEXT DEFAULT 'recipes_unlock',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE UNIQUE INDEX recipe_leads_email_idx ON public.recipe_leads (lower(email));
ALTER TABLE public.recipe_leads ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can subscribe" ON public.recipe_leads FOR INSERT TO anon, authenticated WITH CHECK (true);