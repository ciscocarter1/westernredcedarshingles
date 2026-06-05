-- Revoke any implicit SELECT/UPDATE/DELETE grants on contact_inquiries from public roles
REVOKE SELECT, UPDATE, DELETE ON public.contact_inquiries FROM anon, authenticated, PUBLIC;

-- Ensure service_role retains full access for backend operations
GRANT ALL ON public.contact_inquiries TO service_role;

-- Add explicit restrictive policies denying SELECT/UPDATE/DELETE to anon and authenticated
CREATE POLICY "Deny select on contact_inquiries"
  ON public.contact_inquiries
  FOR SELECT
  TO anon, authenticated
  USING (false);

CREATE POLICY "Deny update on contact_inquiries"
  ON public.contact_inquiries
  FOR UPDATE
  TO anon, authenticated
  USING (false)
  WITH CHECK (false);

CREATE POLICY "Deny delete on contact_inquiries"
  ON public.contact_inquiries
  FOR DELETE
  TO anon, authenticated
  USING (false);